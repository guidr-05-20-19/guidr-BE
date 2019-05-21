
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {
          user_id: 1,
          trip_type: 'Hiking',
          title: 'Two Medicine Pass',
          location: 'Glacier National Park',
          duration: '3 hours',
          description: 'The hike to Two Medicine Pass begins from the South Shore Trailhead at Two Medicine Lake. Just going to the trailhead is a worthwhile experience. The views from the eastern shore of the lake, with Painted Tepee Peak, Sinopah Mountain, Lone Walker Mountain and Flinsch Peak forming a picture perfect backdrop, is one of the most beautiful scenes in Glacier National Park.',
          professional: false,
          date: 'May 21st 2019'
        },
        {
          user_id: 2,
          trip_type: 'Hiking',
          title: 'Avalanche Lake',
          location: 'Glacier National Park',
          duration: '2 hours',
          description: 'The hike to Avalanche Lake in Glacier National Park begins from the Trail of the Cedars Trailhead, located 5.5 miles east of the Lake McDonald Lodge.The Trail of the Cedars, a wheelchair accessible trail, is a loop hike that begins and ends along the Going-to-the-Sun Road. Although the western segment of the loop is slightly shorter, the eastern side is far more scenic. Hikers on the eastern portion of the loop travel along a raised boardwalk as they pass though a forest of ancient western hemlocks and red cedars. Situated on the eastern edge of the maritime climate of the Pacific Northwest, the Lake McDonald Valley also marks the extreme eastern limits for these trees. The humidity in this valley allows the cedars to grow to heights of 100 feet, and diameters of 4 to 7 feet. Some of the trees in this area are more than 500 years old.',
          professional: false,
          date: 'May 21st 2019'
        },
        {
          user_id: 3,
          trip_type: 'Hiking',
          title: 'Grinnell Glacier Overlook',
          location: 'Glacier National Park',
          duration: '7 hours',
          description: 'The hike to the Grinnell Glacier Overlook in Glacier National Park begins from the Highline Trailhead, located on the north side of the Going-to-the-Sun Road at Logan Pass. To avoid the frequently full parking area at Logan Pass, you may want to consider taking the free shuttle up to the pass.The Highline Trail is an extremely popular hike; and for good reason. At every step, and every turn, hikers will enjoy spectacular scenery as the Highline follows along the Continental Divide, also known as the Garden Wall throughout this section of Glacier National Park. The exceptionally beautiful views, the excellent opportunities for spotting wildlife, and the wildflowers, all combine to make this a hike you\'ll remember the rest of your life. If you\'re looking for solitude, however, you likely won\'t find it on this trail. Although it\'s a very strenuous hike, Grinnell Glacier Overlook is still a very popular destination.',
          professional: false,
          date: 'May 21st 2019'
        },
      ]);
    });
};
