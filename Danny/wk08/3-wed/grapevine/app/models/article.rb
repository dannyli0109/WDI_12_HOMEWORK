class Article < ApplicationRecord
  belongs_to :category


  def process_article
    histogram = {}
    words = self.content.split(" ")

    words.each do |word|
      if histogram[word] == nil
        histogram[word] = 1
      else
        histogram[word] += 1
      end
    end
    histogram

  end
end
