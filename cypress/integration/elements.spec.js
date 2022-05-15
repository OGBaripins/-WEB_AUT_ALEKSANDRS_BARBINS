import FormsPage from "../pageObject/FormsPage";

context("Elements Page", () => {
    context("Text box scenarios", () => {
        it.only("formCompletion", () => {
            FormsPage.visit();
            //Take the data from the fixture
            cy.fixture("form_text").then((data) => {
                FormsPage.nameInput.type(data.name);
                FormsPage.lastnameInput.type(data.last_name);
                FormsPage.emailInput.type(data.email);
                FormsPage.genderSelect.contains(data.gender).click();
                FormsPage.mobileInput.type(data.mobile);
                FormsPage.callendar.click();
                FormsPage.callendarYear.select(data.birth_year);
                FormsPage.callendarMonth.select(data.birth_month);
                FormsPage.callendarDay.click({ force: true });
                //Press Enter to autocomplete
                FormsPage.subjectsInput.type(data.subjects + "{enter}");
                FormsPage.hobbiesSelect.contains(data.hobbie).click();
                FormsPage.pictureUpload.selectFile(data.path_to_file);
                FormsPage.addressInput.type(data.address);
                //Press Enter to autocomplete
                FormsPage.stateSelect.type(data.state + "{enter}");
                FormsPage.citySelect.type(data.city + "{enter}");
                FormsPage.submitButton.click({ force: true });

                //Check if all the results can be found in the table
                FormsPage.resultTable
                    .should("contain", data.name + " " + data.last_name)
                    .should("contain", data.email)
                    .should("contain", data.gender)
                    .should("contain", data.mobile)
                    .should("contain", data.birth_day + " " + data.birth_month + "," + data.birth_year)
                    .should("contain", data.subjects)
                    .should("contain", data.hobbie)
                    .should("contain", data.path_to_file.split("/")[3])
                    .should("contain", data.address)
                    .should("contain", data.state + " " + data.city);
            });
        });
    });
});
