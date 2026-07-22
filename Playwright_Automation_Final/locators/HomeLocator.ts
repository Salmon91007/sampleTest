import {Locator, Page} from "@playwright/test"

export class HomeLocator{
    readonly logo: Locator
    readonly heading: Locator;
    readonly searchbar: Locator;
    readonly search: Locator;

    constructor(page:Page){
        this.logo = page.getByRole("link", {name:/Retail Mart/i});
        this.heading = page.getByRole("heading",{name:/Shop Everything/i});
        this.searchbar = page.getByTestId("search-input");
        this.search = page.getByRole("button", {name: "Search"});
    }
}