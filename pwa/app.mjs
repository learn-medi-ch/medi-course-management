
const categories = await getCategories();
console.log(categories);


async function getCategories() {
    const result =
        await (await fetch("/flux-ilias-rest-api/categories")).json();
    return result;
}
