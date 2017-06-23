require "pry"
require_relative "card.rb"
require_relative "player.rb"

def init_cards
  cards = []
  cards.push(Card.new "Pikachu", 40)
  cards.push(Card.new "Rattata", 20)
  cards.push(Card.new "Pidgeot", 60)
  cards.push(Card.new "Alakazam", 80)
  cards.push(Card.new "Butterfree", 30)
  cards.push(Card.new "Gengar", 70)
  cards.push(Card.new "Moltres", 100)
  cards.push(Card.new "Vulpix", 40)
  cards.push(Card.new "Blastoise", 80)
  cards.push(Card.new "Hitmonchan", 50)
  return cards
end

def init_players
  players = []
  players.push(Player.new "Alfred")
  players.push(Player.new "Peter")
  return players
end

# init cards and players
cards = init_cards
players = init_players

#reverse cards
cards.reverse!
# make cards into piles
card_piles = cards.each_slice(3).to_a

# players take piles of cards
players[0].take_card_pile card_piles.shift
players[1].take_card_pile card_piles.shift

# player who wins gets the pile with three cards
players.sample.take_card_pile card_piles.shift

loser = players[0].piles_of_card > players[1].piles_of_card ? players[1] : players[0]
loser.take_card_pile card_piles.shift

binding.pry
