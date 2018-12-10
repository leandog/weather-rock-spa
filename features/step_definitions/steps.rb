Given "I visit the application's start page" do
  visit "http://localhost:8080"
end

When "I switch the language preference to Spanish" do
  find("a", text: "Spanish").click
end

Then "I see a question asking {string}" do |text|
  expect(page).to have_selector("label", text: text)
end
