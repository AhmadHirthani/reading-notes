function sumOddFromBTree(tree) {
    let root = tree.root;
    let sum = 0;
    recursiveFn(root);

    function recursiveFn(root) {

        function recursiveFn(root) {
            if (root.val % 2 !== 0) {
                sum += root.val
            }
            if (root.right) {
                recursiveFn(root.right)
            }
            if (root.left) {
                recursiveFn(root.left)
            }
        }
    }
}