function changeBird(birdCode) {
    // Grab bird name and info text fields
    const birdName = document.getElementById("bird-name");
    const birdInfo = document.getElementById("bird-info");

    // Update info based on last selected icon
    switch (birdCode) {
        case "noca":
            birdName.innerHTML = "Northern Cardinal";
            birdInfo.innerHTML = "The male Northern Cardinal is perhaps responsible for getting more people to open up a field guide than any other bird. They're a perfect combination of familiarity, conspicuousness, and style: a shade of red you can't take your eyes off. Even the brown females sport a sharp crest and warm red accents. Cardinals don't migrate and they don't molt into a dull plumage, so they're still breathtaking in winter's snowy backyards. In summer, their sweet whistles are one of the first sounds of the morning.";
            break;
        case "carw":
            birdName.innerHTML = "Carolina Wren";
            birdInfo.innerHTML = "In summer it can seem that every patch of woods in the eastern United States rings with the rolling song of the Carolina Wren. This shy bird can be hard to see, but it delivers an amazing number of decibels for its size. Follow its \"teakettle-teakettle!\" and other piercing exclamations through backyard or forest, and you may be rewarded with glimpses of this bird's rich cinnamon plumage, white eyebrow stripe, and long, upward-cocked tail. This hardy bird has been wintering farther and farther north in recent decades.";
            break;
        case "tuti":
            birdName.innerHTML = "Tufted Titmouse";
            birdInfo.innerHTML = "A little gray bird with an echoing voice, the Tufted Titmouse is common in eastern deciduous forests and a frequent visitor to feeders. The large black eyes, small, round bill, and brushy crest gives these birds a quiet but eager expression that matches the way they flit through canopies, hang from twig-ends, and drop in to bird feeders. When a titmouse finds a large seed, you'll see it carry the prize to a perch and crack it with sharp whacks of its stout bill.";
            break;
        case "blja":
            birdName.innerHTML = "Blue Jay";
            birdInfo.innerHTML = "This common, large songbird is familiar to many people, with its perky crest; blue, white, and black plumage; and noisy calls. Blue Jays are known for their intelligence and complex social systems with tight family bonds. Their fondness for acorns is credited with helping spread oak trees after the last glacial period.";
            break;
        case "flsj":
            birdName.innerHTML = "Florida Scrub-Jay";
            birdInfo.innerHTML = "The round-headed, blue and gray Florida Scrub-Jay is the only bird species that lives exclusively in Florida, where it occurs in patches of low-growing scrub oak in sandy soils. It perches tall with its long tail hanging down or boldly hops on the ground burying acorns. This social bird forms extended family groups: the young from previous years help their parents at subsequent nests until they can get a territory of their own. Extensive development and habitat fragmentation in Florida threaten this bird's already small population, placing it on the federal endangered species list.";
            break;
        case "cedw":
            birdName.innerHTML = "Cedar Waxwing";
            birdInfo.innerHTML = "A treat to find in your binocular viewfield, the Cedar Waxwing is a silky, shiny collection of brown, gray, and lemon-yellow, accented with a subdued crest, rakish black mask, and brilliant-red wax droplets on the wing feathers. In fall these birds gather by the hundreds to eat berries, filling the air with their high, thin, whistles. In summer you're as likely to find them flitting about over rivers in pursuit of flying insects, where they show off dazzling aeronautics for a forest bird.";
            break;
        case "amro":
            birdName.innerHTML = "American Robin";
            birdInfo.innerHTML = "The quintessential early bird, American Robins are common sights on lawns across North America, where you often see them tugging earthworms out of the ground. Robins are popular birds for their warm orange breast, cheery song, and early appearance at the end of winter. Though they're familiar town and city birds, American Robins are at home in wilder areas, too, including mountain forests and Alaskan wilderness.";
            break;
        case "pawa":
            birdName.innerHTML = "Palm Warbler";
            birdInfo.innerHTML = "A warbler that doesn't act like one, the Palm Warbler spends its time walking on the ground, wagging its tail up and down. This brownish-olive bird has a bright rusty cap and a bold pale eyebrow stripe. They breed mainly in Canada's boreal forest, but most people see them during migration or on wintering grounds foraging in open areas. You may see two forms: an eastern subspecies that's bright yellow below, and a more western subspecies with a pale belly.";
            break;
        case "wbnu":
            birdName.innerHTML = "White-Breasted Nuthatch";
            birdInfo.innerHTML = "A common feeder bird with clean black, gray, and white markings, White-breasted Nuthatches are active, agile little birds with an appetite for insects and large, meaty seeds. They get their common name from their habit of jamming large nuts and acorns into tree bark, then whacking them with their sharp bill to \"hatch\" out the seed from the inside. White-breasted Nuthatches may be small but their voices are loud, and often their insistent nasal yammering will lead you right to them.";
            break;
        case "eabl":
            birdName.innerHTML = "Eastern Bluebird";
            birdInfo.innerHTML = "Most of the country drives during an eastern North American summer will turn up a few Eastern Bluebirds sitting on telephone wires or perched atop a nest box, calling out in a short, wavering voice or abruptly dropping to the ground after an insect. Marvelous birds to capture in your binoculars, male Eastern Bluebirds are a brilliant royal blue on the back and head, and warm red-brown on the breast. Blue tinges in the wings and tail give the grayer females an elegant look.";
            break;
    }
}
