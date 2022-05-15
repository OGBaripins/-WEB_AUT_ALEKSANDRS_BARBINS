import BasePage from "./BasePage";

class FormsPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get nameInput() {
        return cy.get("#firstName");
    }

    static get lastnameInput() {
        return cy.get("#lastName");
    }

    static get emailInput() {
        return cy.get("#userEmail");
    }

    static get genderSelect() {
        return cy.get("#genterWrapper");
    }

    static get mobileInput() {
        return cy.get("#userNumber");
    }

    static get callendar() {
        return cy.get("#dateOfBirthInput");
    }

    static get callendarYear() {
        return cy.get(".react-datepicker__year-select");
    }

    static get callendarMonth() {
        return cy.get(".react-datepicker__month-select");
    }

    static get callendarDay() {
        return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
    }

    static get subjectsInput() {
        return cy.get("#subjectsInput");
    }

    static get hobbiesSelect() {
        return cy.get("#hobbiesWrapper");
    }

    static get addressInput() {
        return cy.get("#currentAddress");
    }

    static get stateSelect() {
        return cy.get("#state");
    }

    static get citySelect() {
        return cy.get("#city");
    }

    static get pictureUpload() {
        return cy.get("#uploadPicture");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get resultTable() {
        return cy.get(".table-responsive");
    }
}

export default FormsPage;
