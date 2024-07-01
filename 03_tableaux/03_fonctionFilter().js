const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// Ici, ma condition est 'word.length > 6', donc le tableau dupliqué ne contiendra 
// que les mots qui respecte cette condition (et donc tous les mots qui ont plus de 6 caractères)
const wordsFilter = words.filter( (word) => word.length > 6 );

console.log(wordsFilter);

const textFilter = (entreeUtilisateur) => {
    return words.filter(
        word => word.indexOf(entreeUtilisateur) !== -1
    );
}

console.log('textFilter: ', textFilter('es'));