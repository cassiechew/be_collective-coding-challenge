import { useCallback, useState, useEffect } from 'react';

import conf from '../../assets/config/local.json';
import Folder from './folder';
import File from './file';

import { v4 as uuidv4 } from 'uuid';

// TODO work out function to figure out how to deferentiate type 
// and possible children. Maybe use "folder" and "file" as conditional to check for children
// 2. Dont forget to drecord total file sizes and total number of "files" specifically

// const fileListParser = (files) => {
//     return files.map(file => {
        
//     });
// };

const fileStructureGenerator = async (data) => {
    let base = [];
    for(let i = 0; i < data.length; i++) {
        if (data[i].type === "folder") {
            let children = fileStructureGenerator(data[i].children);
            let newFolder = (<Folder children={children} key={uuidv4()}></Folder>)
            base.push(newFolder);
        }
        else {
            let newFile = (<File name={data[i].name} size={data[i].size} key={uuidv4()} />)
            base.push(newFile)
        }
    }
    return base;
}

export const getFiles = async (options) => {
    const res = await fetch(conf.app.api.files.url, options);

    let data = await res.json();
    let dres = await fileStructureGenerator(data);

    let d = dres.map(e => {
        console.log(e);
        return e;
    })

    return d
};

export const useGetFiles = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const execute = async (options = {
        method: "GET",
    }) => {
        try {
            setIsLoading(true);
            const files = await getFiles(options);
            setData(files);
            return files;
        } catch (e) {
            setError(e);
            setIsLoading(false);
            throw e;
        }
    };

    return {
        isLoading,
        error,
        data,
        execute: useCallback(execute, [])
    };
};

export default function FileList() {
    const {
        isLoading,
        data,
        execute,
    } = useGetFiles();

    useEffect(() => {
        try {
            execute();
        } catch (e) {
            console.log(e);
        }
    }, [
        execute,
    ]);

    return(
        <div className="container__file-list">
            {data}
        </div>
    )
}