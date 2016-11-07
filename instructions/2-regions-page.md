# Regions page

Let's start from the simple code of the `RegionsPage` component created previously:

```javascript
export const RegionsPage = React.createClass({
  render() {
    return (
      <div>Regions</div>
    );
  }
});
```

What we have to do is to enhance this code to fetch data from the API and manage clics on the regions to navigate to the `WineList` page.

`RegionsPage` is a *Smart Component*, it will use its state to store data and will render the `Regions` component with theses data. You do not have to modify the `Regions` component, it must always be a *Dumb Component*.

<img src='https://github.com/react-bootcamp/react-102/raw/master/instructions/img/wireframe-regions.png' alt='Regions page'>


## Fetch the data

```javascript
export const RegionsPage = React.createClass({
  contextTypes: {
    router: PropTypes.object
  },
  getInitialState() {
    return {
      loading: false,
      regions: [],
    };
  },
  componentDidMount() {
    this.setState({ loading: true }, () => {
      WinesService.fetchRegions().then(regions => {
        this.setState({
          loading: false,
          regions,
        });
      });
    });
  },
  onSelectRegion(region) {
    const root = window.location.hostname === 'react-bootcamp.github.io'
      ? '/react-wines-102/'
      : '/';
    this.context.router.push({
      pathname: `${root}regions/${region}`
    });
  },
  render() {
    if (this.state.loading) {
      return <div className="center-align"><Loader /></div>
    }
    return (
      <Regions
        onSelectRegion={this.onSelectRegion}
        regions={this.state.regions}
        region={{}} />
    );
  }
});
```

## Manage navigation

## What's next

Now you're ready to create the other pages of the SPA.
Go to the [next step](./3-wine-list-page.md) to create the `WineListPage` component.
