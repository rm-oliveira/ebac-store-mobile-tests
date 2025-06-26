import { $ } from '@wdio/globals'

class SignupPage {
    get btnSignup(){
        return $('android=new UiSelector().text("Sign up")')
    }
    get firstName(){
        return $('id:firstName')
    }
    get lastName(){
        return $('id:lastName')
    }
    get phoneNumber(){
        return $('id:phone')
    }
    get emailAddress(){
        return $('id:email')
    }
    get password(){
        return $('id:password')
    }
    get reenterPassword(){
        return $('id:repassword')
    }
    get btnCreate(){
        return $('id:create')
    }

    async signup(firstName, lastName, phoneNumber, emailAddress, password, reenterPassword){
    await this.btnSignup.click()
    await this.firstName.setValue(firstName)
    await this.lastName.setValue(lastName)
    await this.phoneNumber.setValue(phoneNumber)
    await this.emailAddress.setValue(emailAddress)
    await this.password.setValue(password)
    await this.reenterPassword.setValue(reenterPassword)
    await this.btnCreate.click()
   }
}

export default new SignupPage();