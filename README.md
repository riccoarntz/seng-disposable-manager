# seng-disposable-manager
Utility class for cleaning up various destructible things like timeouts, disposable items and whatever you want to
add.

## Installation
### yarn / npm

```sh
yarn add seng-disposable-manager
```

```sh
npm i -S seng-disposable-manager
```

## Usage

#### Constructing and adding disposable items.
```
  // Construct
  const instance = new DisposableManager();

  // Disposable item
  const fooBar = {
    dispose: () => {}
  };

  // Add disposable item
  instance.add(fooBar.dispose);

  // Add interval (use the setInterval of this module)
  instance.add(
    setInterval(() => {
      foo();
    }, 500)
  );

    // Add timeout (use the setTimeout of this module)
  instance.add(
    setTimeout(() => {
      foo();
    }, 500)
  );
```

#### Disposing DisposableManager
This will clean up all the added functions.
```
  disposableManagerInstance.dispose();
```


## Building

In order to build seng-disposable-manager, ensure that you have [Git](http://git-scm.com/downloads) and [Node.js]
(http://nodejs
.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/riccomediamonks/seng-disposable-manager.git
```

Change to the seng-disposable-manager directory:
```sh
cd seng-disposable-manager
```

Install dev dependencies:
```sh
yarn
```

Use one of the following main scripts:
```sh
yarn build           # build this project
yarn dev             # run dev-watch mode, serving example/index.html in the browser
yarn generate        # generate all artifacts (compiles ts, webpack, docs and coverage)
yarn test:unit       # run the unit tests
yarn validate        # runs validation scripts, including test, lint and coverage check
yarn lint            # run tslint on this project
yarn doc             # generate typedoc documentation
```

When installing this module, it adds a pre-push hook, that runs the `validate`
script before committing, so you can be sure that everything checks out.
