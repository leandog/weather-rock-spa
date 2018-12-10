Bundler.require :test

require "capybara"
require "capybara/cucumber"
require "capybara/poltergeist"

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app)
end

Capybara.default_driver = :poltergeist
