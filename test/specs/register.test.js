import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import profilePage from '../pageobjects/profile.page.js'
import signupPage from '../pageobjects/signup.page.js'

describe('My register application', () => {
    it('should register a user', async () => {
        await homePage.openMenu('profile')
        await signupPage.signup('Rayane', 'Oliveira', '34999999999', 'rayane1@ebac.com', '1234', '1234')
        await homePage.openMenu('profile')
        expect ((await profilePage.ProfileName('Rayane')).isDisplayed()).toBeTruthy()
    })
})