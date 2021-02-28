# ¬ €зыке CoffeeScript есть возможность присваивать аргументам значени€ по умолчанию.

# ѕри использовании аргументов, которые имеют значени€ по умолчанию, главное помнить что они дожны быть последними в списке аргументов.


href = (link, text = "itvdn.com") ->	
    document.write "<a href='http://#{link}'> #{text}</a><br/>"
    return                               # ¬озвращаемое значение функции

href "itvdn.com"

href "cbsystematics.com", "CyberaBionicSystematics"

