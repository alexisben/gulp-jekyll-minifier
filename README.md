# gulp-jekyll-minifier

1. Copy/paste gulpfile.js and package.json in your jekyll project root.

2. Exclude these files from jekyll _config.yml adding : 

        ```
        exclude:
            - package.json
            - gulpfile.js
            - yarn.lock
            - package-lock.json
        ```

3. Remember to gitignore node_modules

4. Install package with yarn or npm: 

    ```
    yarn install
    ```

    or 

    ```
    npm install
    ```

5. Run minifications with 

    ```
    jekyll build && gulp
    ```

    or

    ```
    npm run minify
    ```

    or

    ```
    yarn minify
    ```