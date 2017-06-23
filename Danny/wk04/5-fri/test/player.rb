class Player
  def initialize name
    @name = name
    @card_piles = []
  end

  def take_card_pile card_pile
    @card_piles.push(card_pile)
  end

  def piles_of_card
    return @card_piles.length
  end

  def get_name
    return @name
  end

end
