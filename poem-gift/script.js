let poems = [
`CAPPUCCINO

You are espresso —
addictive and intentional,
meant to be savored slowly.

Steamed milk softens your edges,
layer by layer,
until everything feels warm and familiar.

This warmth is not for strangers’ lips,
only for mine.`,

`BLUE POEM

You are a soft flame.
You roar without demanding space,
bright without blinding.

Your warmth doesn’t scorch —
it settles,
it steadies,
it knows when to be quiet.

You burn with care,
and somehow,
that makes you even stronger.`,

`GREEN POEM

You are a gentle breeze
on a star-filled night,
cool enough to calm,
warm enough to stay.

Your eyes —
small constellations,
steady and glowing,
guiding me without a word.

I don’t chase the stars.
I find them when I look at you.`,

`RED POEM

You linger.
Long after the moment passes,
long after the cup is empty.

I carry you with me —
a feeling that stays,
even when everything else fades.`
];

let currentBlock = null;

function openPoem(index) {
    currentBlock = index;
    document.getElementById("blocks-container").classList.add("hidden");
    document.getElementById("poem-view").classList.remove("hidden");
    document.getElementById("poem-text").innerText = poems[index];
}

function goBack() {
    document.getElementById("poem-view").classList.add("hidden");
    document.getElementById("blocks-container").classList.remove("hidden");

    let blocks = document.getElementsByClassName("block");
    blocks[currentBlock].style.display = "none";
}
