# Client-side routing

The app we created previously in [react-101](https://github.com/react-bootcamp/react-101) is very basic: all the functionalities are available in the same page. This is technically convenient and that is a good way to start learning React, but this is not the best for the end user, mainly bescause this kind of design is not mobile friendly.

In this workshop, we will split our app into three different pages :
* one page with the list of wine regions,
* one page with the list of the wines of the region selected on the regions page,
* one page with the details of the wine selected on the wine list page.

| Regions Page | Wine list page | Wine details page |
| ------------ | -------------- | ----------------- |
| <img src='https://github.com/react-bootcamp/react-102/raw/master/instructions/img/screenshot-regions.png' alt='Regions page'> | <img src='https://github.com/react-bootcamp/react-102/raw/master/instructions/img/screenshot-wine-list.png' alt='Wine list page'> | <img src='https://github.com/react-bootcamp/react-102/raw/master/instructions/img/screenshot-wine-details.png' alt='Wine details page'> |

Because we are in a frontend context (we are not here to learn the best backend MVC patterns ;-) ), we will create a **Single Page Application** (SPA) with **client-side routing**.

A Single Page Application is a web application with a unique web page (usually this is the `index.html`). With a SPA, you do not need to load a new page from the server each time an action is done by the user, so that the user experience is better.

So we need a way to manage the navigation through the different pages of our app: we need a *client-side router*!

## Custom client-side Router with React

A simple way to write a custom client-side router with React is to define a technical component to manage the navigation.
This is a top-level component that uses its `state` to manage the current page and the navigation calls stack. It also provide an API that will be used by the different pages of the app.

We can define this component like that:

```javascript
const Navigator = React.createClass({
  propTypes: {
    initialRoute: React.PropTypes.shape({
      component: React.PropTypes.func.isRequired,
      title: React.PropTypes.string,
      props: React.PropTypes.object,
    }).isRequired,
  },
  getInitialState() {
    return {
      component: null,
      title: null,
      props: null,
    };
  },
  componentDidMount() {
    this.setState({
      component: this.props.initialRoute.component,
      title: this.props.initialRoute.title,
      props: this.props.initialRoute.props,
    });
  },
  navigateTo({ component, title, props }) {
    this.setState({ component, title, props });
  },
  render() {
    const Component = this.state.component;
    const { title, props } = this.state;
    return (
      <Component
        {...props}
        navTitle={title}
        navigator={{ navigateTo: this.navigateTo }} />
    );
  }
});

const Page2 = React.createClass({
  ...
});

const Page1 = React.createClass({
  gotoNext() {
    this.props.navigator.navigateTo({
      title: 'Page 2',
      component: Page2,
      props: {
        foo: 'bar',
      },
    });
  },
  render() {
    return (
      <div>
        <h2>{this.props.navTitle}</h2>
        <button onClick={this.gotoNext}>Next</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Navigator initialRoute= {{ title: 'Page 1', component: Page1 }} />,
  document.getElementById('main')
);
```

But this simple approach has some weaknesses, such as losing the current navigation state when the page is reloaded.
To avoid this kind of problem, there are better solutions. [React Router](https://github.com/ReactTraining/react-router) is one of these solution and we will use it to manage our Single Page Application.

## What's next

Now you're ready to write the SPA version of the Wine application.
Go to the [next step](./1-react-router.md) to start writing it with React Router.
