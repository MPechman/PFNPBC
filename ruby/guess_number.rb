random_num = 1 + rand(1000)
user_guess = 0
num_guesses = 0

while user_guess != random_num
	puts "Guess a number between 1 and 1000"
	user_guess = gets.chomp.to_i
	num_guesses = num_guesses + 1
	puts "You've made this many guesses:"
	puts num_guesses
	if user_guess < random_num
		puts "Guess higher"
	elsif user_guess > random_num
		puts "Guess lower"
end
end

puts "Congrats, you got it"