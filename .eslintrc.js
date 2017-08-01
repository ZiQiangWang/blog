module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/self-closing-comp": 0,
        "jsx-a11y/href-no-hash": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-mixed-operators": 0,
        "no-underscore-dangle": 0,
        "func-names": 0,
        "no-restricted-properties":0,
        "no-plusplus": 0,
        "no-unused-expressions":0,
        "react/forbid-prop-types":0,
        "max-len":0,
        "no-unused-vars":0,
        'import/no-extraneous-dependencies':0
    }
};
