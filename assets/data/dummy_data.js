
export const CATEGORIES = [
    new Category('c1','Italian','#f5428d'),
    new Category('c2','Quick & Easy','#f54242'),
    new Category('c3','Hamburgers','#f5a422'),
    new Category('c4','German','#f5d142'),
    new Category('c5','Light & Lovely','#368dff'),
    new Category('c6','BreakFast','#41d95d'),
    new Category('c7','Asian','#9eecff'),
    new Category('c8','French','#b9ffb0'),
    new Category('c9','Summer','#ffc7ff'),
    new Category('c10','Winter','#47fced'),
];

export const MEALS = [
    new Meal(
       'm1',
       ['c1','c2'],
       'spaghetti with tomato sauce',
       'affordable',
       'simple',
       'https://images.deliveryhero.io/image/fd-bd/LH/ei02-hero.jpg?width=1600&height=400&quality=45',
       20,
       [
           '4 Tomato',
           '1 Tablesspoomn',
           '1 Onion'
       ],
       [
           'Butter one side of the white bread',
           'Layer ham, the pineapple and cheese on the white bread',
       ],
       false,
       false,
       false,
       false
    ),
    new Meal(
       'm2',
       ['c3','c4'],
       'PIZZA',
       'affordable',
       'simple',
       'https://images.deliveryhero.io/image/fd-bd/LH/t8zl-hero.jpg?width=1600&height=400&quality=45',
       20,
       [
           '4 Tomato',
           '1 Tablesspoomn',
           '1 Onion'
       ],
       [
           'Butter one side of the white bread',
           'Layer ham, the pineapple and cheese on the white bread',
       ],
       false,
       false,
       false,
       true
    ),
    new Meal(
       'm3',
       ['c5','c6'],
       'Tomato sauce',
       'affordable',
       'simple',
       'https://images.deliveryhero.io/image/fd-bd/LH/c1bc-hero.jpg?width=1600&height=400&quality=45',
       20,
       [
           '4 Tomato',
           '1 Tablesspoomn',
           '1 Onion'
       ],
       [
           'Butter one side of the white bread',
           'Layer ham, the pineapple and cheese on the white bread',
       ],
       false,
       false,
       false,
       false
    ),

];