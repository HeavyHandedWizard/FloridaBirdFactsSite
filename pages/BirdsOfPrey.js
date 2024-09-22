function changeBird(birdCode) {
    // Grab bird name and info text fields
    const birdName = document.getElementById("bird-name");
    const birdInfo = document.getElementById("bird-info");

    // Update info based on last selected icon
    switch (birdCode) {
        case "rsha":
            birdName.innerHTML = "Red-Shouldered Hawk";
            birdInfo.innerHTML = "Whether wheeling over a swamp forest or whistling plaintively from a riverine park, a Red-shouldered Hawk is typically a sign of tall woods and water. It's one of our most distinctively marked common hawks, with barred reddish-peachy underparts and a strongly banded tail. In flight, translucent crescents near the wingtips help to identify the species at a distance. These forest hawks hunt prey ranging from mice to frogs and snakes.";
            console.log(birdCode);
            break;
        case "rtha":
            birdName.innerHTML = "Red-Tailed Hawk";
            birdInfo.innerHTML = "This is probably the most common hawk in North America. If you've got sharp eyes you'll see several individuals on almost any long car ride, anywhere. Red-tailed Hawks soar above open fields, slowly turning circles on their broad, rounded wings. Other times you'll see them atop telephone poles, eyes fixed on the ground to catch the movements of a vole or a rabbit, or simply waiting out cold weather before climbing a thermal updraft into the sky.";
            console.log(birdCode);
            break;
        case "coha":
            birdName.innerHTML = "Cooper's Hawk";
            birdInfo.innerHTML = "Among the bird world's most skillful fliers, Cooper's Hawks are common woodland hawks that tear through cluttered tree canopies in high speed pursuit of other birds. You're most likely to see one prowling above a forest edge or field using just a few stiff wingbeats followed by a glide. With their smaller lookalike, the Sharp-shinned Hawk, Cooper's Hawks make for famously tricky identifications. Both species are sometimes unwanted guests at bird feeders, looking for an easy meal (but not one of sunflower seeds).";
            console.log(birdCode);
            break;
        case "baea":
            birdName.innerHTML = "Bald Eagle";
            birdInfo.innerHTML = "The Bald Eagle has been the national emblem of the United States since 1782 and a spiritual symbol for native people for far longer than that. These regal birds aren't really bald, but their white-feathered heads gleam in contrast to their chocolate-brown body and wings. Look for them soaring in solitude, chasing other birds for their food, or gathering by the hundreds in winter. Once endangered by hunting and pesticides, Bald Eagles have flourished under protection.";
            console.log(birdCode);
            break;
        case "ospr":
            birdName.innerHTML = "Osprey";
            birdInfo.innerHTML = "Unique among North American raptors for its diet of live fish and ability to dive into water to catch them, Ospreys are common sights soaring over shorelines, patrolling waterways, and standing on their huge stick nests, white heads gleaming. These large, rangy hawks do well around humans and have rebounded in numbers following the ban on the pesticide DDT. Hunting Ospreys are a picture of concentration, diving with feet outstretched and yellow eyes sighting straight along their talons.";
            console.log(birdCode);
            break;
        case "amke":
            birdName.innerHTML = "American Kestrel";
            birdInfo.innerHTML = "North America's littlest falcon, the American Kestrel packs a predator's fierce intensity into its small body. It's one of the most colorful of all raptors: the male's slate-blue head and wings contrast elegantly with his rusty-red back and tail; the female has the same warm reddish on her wings, back, and tail. Hunting for insects and other small prey in open territory, kestrels perch on wires or poles, or hover facing into the wind, flapping and adjusting their long tails to stay in place. Kestrels are declining in parts of their range; you can help them by putting up nest boxes.";
            console.log(birdCode);
            break;
        case "stki":
            birdName.innerHTML = "Swallow-Tailed Kite";
            birdInfo.innerHTML = "The lilting Swallow-tailed Kite has been called \"the coolest bird on the planet.\" With its deeply forked tail and bold black-and-white plumage, it is unmistakable in the summer skies above swamps of the Southeast. Flying with barely a wingbeat and maneuvering with twists of its incredible tail, it chases dragonflies or plucks frogs, lizards, snakes, and nestling birds from tree branches. After rearing its young in a treetop nest, the kite migrates to wintering grounds in South America.";
            console.log(birdCode);
            break;
        case "blvu":
            birdName.innerHTML = "Black Vulture";
            birdInfo.innerHTML = "With sooty black plumage, a bare black head, and neat white stars under the wingtips, Black Vultures are almost dapper. Whereas Turkey Vultures are lanky birds with teetering flight, Black Vultures are compact birds with broad wings, short tails, and powerful wingbeats. The two species often associate: the Black Vulture makes up for its poor sense of smell by following Turkey Vultures to carcasses. Highly social birds with fierce family loyalty, Black Vultures share food with relatives, feeding young for months after they've fledged.";
            console.log(birdCode);
            break;
        case "bado":
            birdName.innerHTML = "Barred Owl";
            birdInfo.innerHTML = "The Barred Owl's hooting call, \"Who cooks for you? Who cooks for you-all?\" is a classic sound of old forests and treed swamps. But this attractive owl, with soulful brown eyes and brown-and-white-striped plumage, can also pass completely unnoticed as it flies noiselessly through the dense canopy or snoozes on a tree limb. Originally a bird of the east, during the twentieth century it spread through the Pacific Northwest and southward into California.";
            console.log(birdCode);
            break;
        case "buow":
            birdName.innerHTML = "Burrowing Owl";
            birdInfo.innerHTML = "Owls are unmistakable birds, and that goes double for a long-legged owl that hunts on the ground during the day. Burrowing Owls are small, sandy colored owls with bright-yellow eyes. They live underground in burrows they've dug themselves or taken over from a prairie dog, ground squirrel, or tortoise. They live in grasslands, deserts, and other open habitats, where they hunt mainly insects and rodents. Their numbers have declined sharply with human alteration of their habitat and the decline of prairie dogs and ground squirrels.";
            console.log(birdCode);
            break;
    }
}
