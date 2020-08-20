const config = {};

config.module = {
    rules: [
        {
            test: /\.ts$/,
            use: ['ts-loader', 'babel-loader']
        }
    ]
};

config.resolve = {
    extensions: ['.ts', '.js'],
}

config.plugins = [];

module.exports = config;
