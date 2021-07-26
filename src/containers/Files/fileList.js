import { useCallback, useState, useEffect } from 'react';

import { fileStructureGenerator } from '../../utils';
import conf from '../../assets/config/local.json';

// TODO work out function to figure out how to deferentiate type 
// and possible children. Maybe use "folder" and "file" as conditional to check for children
// 2. Dont forget to drecord total file sizes and total number of "files" specifically

export let Items = {
    setParentFileSize: null, 
    setParentNumFiles: null,
};




/**
 * Non-hook API connection for getting list of movies
 * 
 * @param {{method: string, headers: {string: string}}} options 
 */
export const getFiles = async (options) => {
    const res = await fetch(conf.app.api.files.url, options);

    let data = await res.json();
    let dres = await fileStructureGenerator(data);

    let d = dres.map(e => {
        return e;
    });

    return d;
};

/**
 * Hook API connection for getting list of movie.
 */
export const useGetFiles = () => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const execute = async (options = {
        method: "GET",
    }) => {
        try {
            const files = await getFiles(options);
            setData(files);
            return files;
        } catch (e) {
            setError(e);
            throw e;
        }
    };

    return {
        error,
        data,
        execute: useCallback(execute, [])
    };
};

/**
 * Component for listing out the files
 * 
 * @Component
 */
export default function FileList(props) {
    const {
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

    Items.setParentNumFiles = props.setParentNumFiles;
    Items.setParentFileSize = props.setParentFileSize;

    return(
        <div className="container__file-list">
            {data}
        </div>
    )
}