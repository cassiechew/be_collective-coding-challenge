import { Items as fileData } from '../containers/Files/fileList';
import Folder from '../containers/Files/folder';
import File from '../containers/Files/file';
import ByteConversion from './byteConversion';

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
                <div key={uuidv4()}>
                    <Folder name={data[i].name} children={children} />
                </div>
            )
            base.push(newFolder);
        }
        else {
            let conv = ByteConversion(parseInt(data[i].size), 0)
            let newFile = (<File name={data[i].name} size={conv} key={uuidv4()}  />)
            base.push(newFile)
            size += data[i].size;
            count++;
        }
    }

    fileData.setParentFileSize(ByteConversion(parseInt(size), 0))
    fileData.setParentNumFiles(count)

    return base;
}