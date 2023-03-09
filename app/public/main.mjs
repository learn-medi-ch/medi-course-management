import {FluxEcoUiApi} from "./flux-eco-ui/src/Adapters/Api/FluxEcoUiApi.mjs";


//todo
const basePath = "/flux-ilias-rest-api-proxy/medi-eco";

const api = await FluxEcoUiApi.new();

async function getTreeData() {
    try {
        const response = await fetch(basePath + '/home/readPageStructure');
        const results = await response.json();
        return results;
    } catch (err) {
        console.error(`Error fetching tree data: ${err}`);
    }
}

const parentElement = document.body;
const treeId = "learnplaces";
const treeData = await JSON.parse(JSON.stringify(await(await getTreeData())));
console.log(treeData);
await api.renderTree(parentElement, treeId,treeData)
