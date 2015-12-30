# Style Guide Example

This project contains a React starter app, as well as an example of our Interactive Style Guide (ISG).

Note: Depending on how Node is set up on your machine, you may need to prefix the following commands with `sudo`.

---

To get this project running…

1. Clone this repository.
2. `cd` into the local directory.
3. Type `npm install`.
4. Type `npm start`.

---

To run unit tests on the React components…

1. `cd` into the local directory.
2. Type `npm run test`

---

To build the starter app to static files…

1. `cd` into the local directory.
2. Type `npm start`.
3. Type `npm run build`.

---

To build the ISG to static files…

1. `cd` into the local directory.
2. Type `npm start`.
3. Type `npm run build_isg`.

If you would rather build only a portion of the ISG to static files, replace step #3 `build_isg` with one of the following…

- `npm run build_isg_intro`
- `npm run build_isg_branding`
- `npm run build_isg_patterns`
- `npm run build_isg_requirements`
- `npm run postbuild_isg_screens`

---

To build **both** the starter app and ISG to static files…

1. `cd` into the local directory.
2. Delete the existing "/build" folder.
3. Type `npm start`.
4. Type `npm run build_all`.
