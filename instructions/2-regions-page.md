# Regions page

## Create links

enfin vous pouvez créer des liens en utilisant l'API

```javascript
import { Link } from 'react-router';

...

<Link to="/mon/path/1234">Chose 1234</Link>
```

de `react-router` ou en utilisant directement l'API `history`disponible à travers le contexte `react`.

Pour celà, il est nécessaire de spécifier sur le composant routé, un `contextType` afin de valider le contenu du contexte

```javascript
export const Page = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  handleNavigationTo(path) {
    // ici on déclenche la navigation vers l'url /view/${path}/details
    this.context.router.push({
      pathname: `/view/${path}/details`
    });
  },

  render() {
    ...
  }
}
```

## What's next

Now you're ready to create the real pages of the SPA.
Go to the [next step](./2-reegions-page.md) to start writing the `RegionsPage` component.
