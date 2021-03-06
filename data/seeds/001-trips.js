exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("trips")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("trips").insert([
        {
          user_id: 1,
          trip_type: "Hiking",
          title: "Two Medicine Pass",
          location: "Glacier National Park",
          duration: "3 hours",
          description:
            "The hike to Two Medicine Pass begins from the South Shore Trailhead at Two Medicine Lake. Just going to the trailhead is a worthwhile experience. The views from the eastern shore of the lake, with Painted Tepee Peak, Sinopah Mountain, Lone Walker Mountain and Flinsch Peak forming a picture perfect backdrop, is one of the most beautiful scenes in Glacier National Park.",
          professional: false,
          date: "May 21st 2019"
        },
        {
          user_id: 2,
          trip_type: "Hiking",
          title: "Avalanche Lake",
          location: "Glacier National Park",
          duration: "2 hours",
          description:
            "The hike to Avalanche Lake in Glacier National Park begins from the Trail of the Cedars Trailhead, located 5.5 miles east of the Lake McDonald Lodge.The Trail of the Cedars, a wheelchair accessible trail, is a loop hike that begins and ends along the Going-to-the-Sun Road. Although the western segment of the loop is slightly shorter, the eastern side is far more scenic. Hikers on the eastern portion of the loop travel along a raised boardwalk as they pass though a forest of ancient western hemlocks and red cedars. Situated on the eastern edge of the maritime climate of the Pacific Northwest, the Lake McDonald Valley also marks the extreme eastern limits for these trees. The humidity in this valley allows the cedars to grow to heights of 100 feet, and diameters of 4 to 7 feet. Some of the trees in this area are more than 500 years old.",
          professional: false,
          date: "May 21st 2019"
        },
        {
          user_id: 3,
          trip_type: "Hiking",
          title: "Grinnell Glacier Overlook",
          location: "Glacier National Park",
          duration: "7 hours",
          description:
            "The hike to the Grinnell Glacier Overlook in Glacier National Park begins from the Highline Trailhead, located on the north side of the Going-to-the-Sun Road at Logan Pass. To avoid the frequently full parking area at Logan Pass, you may want to consider taking the free shuttle up to the pass.The Highline Trail is an extremely popular hike; and for good reason. At every step, and every turn, hikers will enjoy spectacular scenery as the Highline follows along the Continental Divide, also known as the Garden Wall throughout this section of Glacier National Park. The exceptionally beautiful views, the excellent opportunities for spotting wildlife, and the wildflowers, all combine to make this a hike you'll remember the rest of your life. If you're looking for solitude, however, you likely won't find it on this trail. Although it's a very strenuous hike, Grinnell Glacier Overlook is still a very popular destination.",
          professional: false,
          date: "May 21st 2019"
        },
        {
          user_id: 1,
          trip_type: "Hiking",
          title: "Apgar Lookout Trail",
          location: "Glacier National Park",
          duration: "3 hours",
          description: "The hike to the Apgar Lookout fire tower begins as an easy stroll along an old dirt road. Starting from the south side of Apgar Mountain, the trail snakes around to the west side before making a couple of long switchbacks up the southwestern slopes of the mountain. The lookout sits on an east facing ridge roughly 200 feet below the actual summit of Apgar Mountain.",
          professional: false,
          date: "May 23rd 2019"
        },
        {
          user_id: 2,
          trip_type: "Hiking",
          title: "Apikuni Falls",
          location: "Glacier National Park",
          duration: "2 hours",
          description:
            "From the side of the road the trail starts off in an open field known as Apikuni Flat. Although you can't actually see the falls from the trailhead, you can see the general location of your destination. Look for the notch between Atlyn Peak and Apikuni Mountain, the two mountains almost directly in front of you. Although it's a short hike, the vantage point from the trailhead reveals a relatively steep climb.",
          professional: false,
          date: "May 23rd 2019"
        },
        {
          user_id: 3,
          trip_type: "Hiking",
          title: "Appistoki Falls",
          location: "Glacier National Park",
          duration: "2 hours",
          description:
            "To reach your destination you'll be following the Mt. Henry Trail for most of your route. The trail owes its existence to the Great Northern Railway. In order to make transportation easier between their two properties, the Glacier Park Lodge and the Two Medicine Chalets, the railroad company contracted to build the trail in 1913.",
          professional: false,
          date: "May 24rd 2019"
        },
        {
          user_id: 1,
          trip_type: "Hiking",
          title: "Firebrand Pass",
          location: "Glacier National Park",
          duration: "4 hours",
          description: "To reach Firebrand Pass hikers will make a semi-circle around Calf Robe Mountain. The hike begins in an open field, a transition zone between prairie and montane forest. Here you'll enjoy expansive views of Little Dog Mountain and Summit Mountain, as well as Calf Robe Mountain directly in front of you. You'll also likely notice a few aspen groves off in the distance as well.",
          professional: false,
          date: "May 23rd 2019"
        },
        {
          user_id: 2,
          trip_type: "Hiking",
          title: "Paradise Point",
          location: "Glacier National Park",
          duration: "5 hours",
          description: "The hike to Paradise Point begins from the South Shore Trailhead at Two Medicine Lake. Just going to the trailhead is a worthwhile experience. The view from the eastern shore of the lake, with Sinopah Mountain, Lone Walker Mountain and Flinsch Peak forming a picture perfect backdrop, is one of the most beautiful scenes in Glacier National Park.",
          professional: false,
          date: "May 23rd 2019"
        },
        {
          user_id: 3,
          trip_type: "Hiking",
          title: "Snyder Lake",
          location: "Glacier National Park",
          duration: "3 hours",
          description: "The hike to Snyder Lake begins from the Sperry Trailhead, located across the street from the Lake McDonald Lodge. In a very short distance, after passing the horse path, the trail becomes known as the Gunsight Pass Trail.",
          professional: false,
          date: "May 24th 2019"
        },
        {
          user_id: 1,
          trip_type: "Hiking",
          title: "Swiftcurrent Pass",
          location: "Glacier National Park",
          duration: "5 hours",
          description: "The hike to Swiftcurrent Pass n Glacier National Park begins from the Swiftcurrent Pass Trailhead in Many Glacier. The trailhead is located at the far end of the parking area for the Swiftcurrent Motor Inn at the end of Many Glacier Road.",
          professional: false,
          date: "May 21st 2019"
        },
      ]);
    });
};
