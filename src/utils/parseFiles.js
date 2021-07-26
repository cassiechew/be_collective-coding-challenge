import { Items as fileData } from '../containers/Files/fileList';
import Folder from '../containers/Files/folder';
import File from '../containers/Files/file';

import { v4 as uuidv4 } from 'uuid';

let size = 0;
let count = 0;

/**
 * Function to generate the file structure for rendering
 * @param {*} data 
 * @returns an array of react components
 */
export default async function fileStructureGenerator (data) {
    let base = [];

    for(let i = 0; i < data.length; i++) {
        if (data[i].type === "folder") {
            let children = await fileStructureGenerator(data[i].children);
            let newFolder = (
                <div>
                    <Folder name={data[i].name} children={children} key={uuidv4()} />
                </div>
            )
            console.log(children);
            base.push(newFolder);
        }
        else {
            let newFile = (<File name={data[i].name} size={data[i].size} key={uuidv4()}  />)
            base.push(newFile)
            size += data[i].size;
            count++;
        }
    }

    fileData.setParentFileSize(size)
    fileData.setParentNumFiles(count)

    return base;
}