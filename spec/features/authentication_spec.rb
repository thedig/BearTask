require 'spec_helper'

feature "the signup process" do 

  it "has a new user page" do 
    visit new_user_url
    expect(page).to have_content "Sign Up"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'username', :with => "testing_username"
      fill_in 'password', :with => "biscuits"
      click_on "Submit"
    end

    it "redirects to boards index page after signup" do
      expect(page).to have_content "Boards"
    end

    it "shows username on the homepage after signup" do
      expect(page).to have_content "testing_username"
    end
  end

end