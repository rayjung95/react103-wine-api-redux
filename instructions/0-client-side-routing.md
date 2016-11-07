# Client-side routing

The app we created previously in [react-101](https://github.com/react-bootcamp/react-101) is very basic: all the functionalities are available in the same page. This is technically convenient and that is a good way to start learning React, but this is not the best for the end user, mainly bescause this kind of design is not mobile friendly.

In this workshop, we will split our app into three different pages :
* one page with the list of wine regions,
* one page with the list of the wines of the region selected on the regions page,
* one page with the details of the wine selected on the wine list page.

// TODO table with pages

| Regions Page | Wine list page | Wine details page |
| ------------ | -------------- | ----------------- |
| <img src='https://github.com/react-bootcamp/react-102/raw/master/instructions/img/screenshot-regions.png' height='500' alt='Regions page'> | <img src='https://github.com/react-bootcamp/react-102/raw/master/instructions/img/screenshot-wine-list.png' height='500' alt='Wine list page'> | <img src='https://github.com/react-bootcamp/react-102/raw/master/instructions/img/screenshot-wine-details.png' height='500' alt='Wine details page'> |

Because we are in a frontend context (we are not here to learn the best backend MVC patterns ;-) ), we will create a **Single Page Application** with **client-side routing**.

// To be continued...
Une SPA est une application web (front) accessible via une page unique. Le but est d'éviter le chargement d'une nouvelle page à chaque action demandée et donc de fluidifier l'expérience utilisateur.

Il va donc nous falloir un moyen de router l'utilisateur à travers divers écrans.
