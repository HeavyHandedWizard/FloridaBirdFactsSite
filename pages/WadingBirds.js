function changeBird(birdCode) {
    // Grab bird name and info text fields
    const birdName = document.getElementById("bird-name");
    const birdInfo = document.getElementById("bird-info");

    // Update info based on last selected icon
    switch (birdCode) {
        case "gbhe":
            birdName.innerHTML = "Great Blue Heron";
            birdInfo.innerHTML = "Whether poised at a river bend or cruising the coastline with slow, deep wingbeats, the Great Blue Heron is a majestic sight. This stately heron with its subtle blue-gray plumage often stands motionless as it scans for prey or wades belly deep with long, deliberate steps. They may move slowly, but Great Blue Herons can strike like lightning to grab a fish or snap up a gopher. In flight, look for this widespread heron's tucked-in neck and long legs trailing out behind.";
            break;
        case "greg":
            birdName.innerHTML = "Great Egret";
            birdInfo.innerHTML = "The elegant Great Egret is a dazzling sight in many a North American wetland. Slightly smaller and more svelte than a Great Blue Heron, these are still large birds with impressive wingspans. They hunt in classic heron fashion, standing immobile or wading through wetlands to capture fish with a deadly jab of their yellow bill. Great Egrets were hunted nearly to extinction for their plumes in the late nineteenth century, sparking conservation movements and some of the first laws to protect birds.";
            break;
        case "caeg":
            birdName.innerHTML = "Cattle Egret";
            birdInfo.innerHTML = "The short, thick-necked Western Cattle Egret spends most of its time in fields rather than streams. It forages at the feet of grazing cattle, head bobbing with each step, or rides on their backs to pick at ticks. This stocky white heron has yellow plumes on its head and neck during breeding season. Originally from Africa, it found its way to North America in 1953 and quickly spread across the continent. Elsewhere in the world, it forages alongside camels, ostriches, rhinos, and tortoises - as well as farmers' tractors.";
            break;
        case "grhe":
            birdName.innerHTML = "Green Heron";
            birdInfo.innerHTML = "From a distance, the Green Heron is a dark, stocky bird hunched on slender yellow legs at the water's edge, often hidden behind a tangle of leaves. Seen up close, it is a striking bird with a velvet-green back, rich chestnut body, and a dark cap often raised into a short crest. These small herons crouch patiently to surprise fish with a snatch of their daggerlike bill. They sometimes lure in fish using small items such as twigs or insects as bait.";
            break;
        case "trhe":
            birdName.innerHTML = "Tricolored Heron";
            birdInfo.innerHTML = "The Tricolored Heron is a sleek and slender heron adorned in blue-gray, lavender, and white. The white stripe down the middle of its sinuous neck and its white belly set it apart from other dark herons. This fairly small heron wades through coastal waters in search of small fish, often running and stopping with quick turns and starts, as if dancing in a ballet. It builds stick nests in trees and shrubs, often in colonies with other wading birds. It's common in southern saltmarshes and was once known as the Louisiana Heron.";
            break;
        case "ambi":
            birdName.innerHTML = "American Bittern";
            birdInfo.innerHTML = "You'll need sharp eyes to catch sight of an American Bittern. This streaky, brown and buff heron can materialize among the reeds, and disappear as quickly, especially when striking a concealment pose with neck stretched and bill pointed skyward. These stealthy carnivores stand motionless amid tall marsh vegetation, or patiently stalk fish, frogs, and insects. They are at their most noticeable in spring, when the marshes resound with their odd booming calls that sounds like the gulps of a thirsty giant.";
            break;
        case "coga":
            birdName.innerHTML = "Common Gallinule";
            birdInfo.innerHTML = "The Common Gallinule swims like a duck and walks atop floating vegetation like a rail with its long and slender toes. This boldly marked rail has a brilliant red shield over the bill and a white racing stripe down its side. It squawks and whinnies from thick cover in marshes and ponds from Canada to Chile, peeking in and out of vegetation. This species was formerly called the Common Moorhen and is closely related to moorhen species in the Old World.";
            break;
        case "pusw":
            birdName.innerHTML = "Purple Swamphen";
            birdInfo.innerHTML = "Lurking in the marshes of the extreme southeastern U.S. lives one of the most vividly colored birds in all of North America. Purple Gallinules combine cherry red, sky blue, moss green, aquamarine, indigo, violet, and school-bus yellow, a color palette that blends surprisingly well with tropical and subtropical wetlands. Watch for these long-legged, long-toed birds stepping gingerly across water lilies and other floating vegetation as they hunt frogs and invertebrates or pick at tubers.";
            break;
        case "rosp":
            birdName.innerHTML = "Roseate Spoonbill";
            birdInfo.innerHTML = "The flamboyant Roseate Spoonbill looks like it came straight out of a Dr. Seuss book with its bright pink feathers, red eye staring out from a partly bald head, and giant spoon-shaped bill. Groups sweep their spoonbills through shallow fresh or salt waters snapping up crustaceans and fish. They fly with necks outstretched, to and from foraging and nesting areas along the coastal southeastern U.S., and south to South America. These social birds nest and roost in trees and shrubs with other large wading birds.";
            break;
        case "wost":
            birdName.innerHTML = "Wood Stork";
            birdInfo.innerHTML = "Large, white Wood Storks wade through southeastern swamps and wetlands. Although this stork doesn't bring babies, it is a good flier, soaring on thermals with neck and legs outstretched. This bald-headed wading bird stands just over 3 feet tall, towering above almost all other wetland birds. It slowly walks through wetlands with its long, hefty bill down in the water feeling for fish and crustaceans. This ungainly looking stork roosts and nests in colonies in trees above standing water.";
            break;
    }
}
