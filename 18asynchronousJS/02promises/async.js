const getIDs = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve([523,883,432]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {

        setTimeout((ID) => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
}

const getRelated = publisher => {
    return new Promise((resolve, reject) =>{

        setTimeout((pub) => {
            const recipe2 = {title:`Italian Pizza`, publisher:'jhonas'};
            resolve(`${pub}: ${recipe2.title}`);
        }, 1500, publisher);
    });
};

getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then( recipe => {
    console.log(recipe);
    return getRelated('Jonas');
})
.then(related => {
    console.log(related);
}) 
.catch(error => {
    console.log('Error!!');
});