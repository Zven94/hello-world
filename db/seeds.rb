messages = [
  "Welcome to our app!",
  "It is a pleasure having you in here.",
  "Thank you for joining us.",
  "Welcome to the community.",
  "We hope you feel at home."
]

messages.each do |content|
  Message.create(content: content)
end