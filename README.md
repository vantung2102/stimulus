## General Information

- Ruby version: `ruby 3.2.2`
- Rails version: `rails 7.1.1`
- Database: `postgresql`

## Test App

## Installation

- Install correct ruby version for our project: `rbenv local 3.2.2`
- Install bundler: `gem install bundler`
- Install gems: `bundle install`
- Config database: create `config/database.yml`
- Add rails master key at `config/master.key` or generate new one by `rm -rf config/credentials.yml.enc && rm -rf config/master.key && EDITOR=vim rails credentials:edit`
- Database setup: `bundle exec rake db:setup`
- Start server: `rails s`
- Visit `http://localhost:3000` and start your development

## Rspec

- Run test by `bundle exec rspec`
- Check test coverage at `coverage/index.html`
