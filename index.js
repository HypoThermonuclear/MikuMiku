//! Update Displays
onload = function() {
    changeShopGold();
    updateDisplays();
};

function updateDisplays() {
    // Day displays
    if (dayDisplay.style.display == "flex") {
        dayGoldDisplay.textContent = gold.toFixed(2);
        dayGemDisplay.textContent = gem.toFixed(2);
        earnedGoldDisplay.textContent = earnedGold.toFixed(2);
        earnedGemDisplay.textContent = earnedGem.toFixed(2);

        dayDayDisplay.textContent = "Day " + day;
    }
    // Shop Displays
    else if (shopDisplay.style.display == "flex") {
        shopGoldDisplay.textContent = gold.toFixed(2);
        shopGemDisplay.textContent = gem.toFixed(2);

        shopDayDisplay.textContent = "Day " + day;

        // Bonus Gold
        upgradeBonusGoldStatDisplay.textContent = "Current: " + bonusGoldLevel.toFixed(2) + " (+1)";
        upgradeBonusGoldPriceDisplay.textContent = "Price: " + bonusGoldUpgradePrice.toFixed(2);
        upgradeBonusGoldLevelDisplay.textContent = "Level " + bonusGoldLevel + "/10";
        // Multiply Gold
        upgradeMultiplyGoldStatDisplay.textContent = "Current: x" + multiplyGoldValue.toFixed(2) + " (+10%)";
        upgradeMultiplyGoldPriceDisplay.textContent = "Price: " + multiplyGoldUpgradePrice.toFixed(2);
        upgradeMultiplyGoldLevelDisplay.textContent = "Level " + multiplyGoldLevel + "/10";
        // Time Limit
        upgradeTimeLimitStatDisplay.textContent = "Current: " + timeLimitValue.toFixed(0) + "s (+2s)";
        upgradeTimeLimitPriceDisplay.textContent = "Price: " + timeLimitUpgradePrice.toFixed(2);
        upgradeTimeLimitLevelDisplay.textContent = "Level " + timeLimitLevel + "/10";
        // Bonus Apples
        upgradeBonusApplesStatDisplay.textContent = "Current: " + bonusApplesValue.toFixed(0) + " (+1s)";
        upgradeBonusApplesPriceDisplay.textContent = "Price: " + bonusApplesUpgradePrice.toFixed(2);
        upgradeBonusApplesLevelDisplay.textContent = "Level " + bonusApplesLevel + "/10";
        // Gapple Chance
        upgradeGappleChanceStatDisplay.textContent = "Current: " + (gappleChanceValue * 10).toFixed(0) + "% (+10%)";
        upgradeGappleChancePriceDisplay.textContent = "Price: " + gappleChanceUpgradePrice.toFixed(2);
        upgradeGappleChanceLevelDisplay.textContent = "Level " + gappleChanceLevel + "/10";
        // Dash
        upgradeDashStatDisplay.textContent = "Current: " + dashValue;
        upgradeDashPriceDisplay.textContent = "Price: " + dashUpgradePrice.toFixed(2);
        upgradeDashLevelDisplay.textContent = "Level " + dashLevel + "/1";
        // Bonus Gems
        upgradeBonusGemsStatDisplay.textContent = "Current: " + bonusGemsLevel.toFixed(2) + " (+1)";
        upgradeBonusGemsPriceDisplay.textContent = "Price: " + bonusGemsUpgradePrice.toFixed(2);
        upgradeBonusGemsLevelDisplay.textContent = "Level " + bonusGemsLevel + "/10";
        // Multiply Gem
        upgradeMultiplyGemStatDisplay.textContent = "Current: x" + multiplyGemValue.toFixed(2) + " (+10%)";
        upgradeMultiplyGemPriceDisplay.textContent = "Price: " + multiplyGemUpgradePrice.toFixed(2);
        upgradeMultiplyGemLevelDisplay.textContent = "Level " + multiplyGemLevel + "/10";
    }
}

//! Variables

// Shop Icons Switcher Display
const goldShopIcon = document.getElementById("gold-shop-icon");
const otherShopIcon = document.getElementById("other-shop-icon");
const specialShopIcon = document.getElementById("special-shop-icon");
const gemShopIcon = document.getElementById("gem-shop-icon");

// Shop Upgrade Tiles Display
const upgradeBonusGoldTile = document.getElementById("upgrade-bonus-gold-tile");
const upgradeMultiplyGoldTile = document.getElementById("upgrade-multiply-gold-tile");
const upgradeTimeLimitTile = document.getElementById("upgrade-time-limit-tile");
const upgradeBonusApplesTile = document.getElementById("upgrade-bonus-apples-tile");
const upgradeGappleChanceTile = document.getElementById("upgrade-gapple-chance-tile");
const upgradeDashTile = document.getElementById("upgrade-dash-tile");
const upgradeBonusGemsTile = document.getElementById("upgrade-bonus-gems-tile");
const upgradeMultiplyGemTile = document.getElementById("upgrade-multiply-gem-tile");

// Shop Upgrade Tiles Details

// Bonus Gold
const upgradeBonusGoldPriceDisplay = document.getElementById("upgrade-bonus-gold-price-display");
const upgradeBonusGoldStatDisplay = document.getElementById("upgrade-bonus-gold-stat-display");
const upgradeBonusGoldLevelDisplay = document.getElementById("upgrade-bonus-gold-level-display");
// Multiply Gold
const upgradeMultiplyGoldPriceDisplay = document.getElementById("upgrade-multiply-gold-price-display");
const upgradeMultiplyGoldStatDisplay = document.getElementById("upgrade-multiply-gold-stat-display");
const upgradeMultiplyGoldLevelDisplay = document.getElementById("upgrade-multiply-gold-level-display");
// Time Limit
const upgradeTimeLimitPriceDisplay = document.getElementById("upgrade-time-limit-price-display");
const upgradeTimeLimitStatDisplay = document.getElementById("upgrade-time-limit-stat-display");
const upgradeTimeLimitLevelDisplay = document.getElementById("upgrade-time-limit-level-display");
// Bonus Apples
const upgradeBonusApplesPriceDisplay = document.getElementById("upgrade-bonus-apples-price-display");
const upgradeBonusApplesStatDisplay = document.getElementById("upgrade-bonus-apples-stat-display");
const upgradeBonusApplesLevelDisplay = document.getElementById("upgrade-bonus-apples-level-display");
// Gapple Chance
const upgradeGappleChancePriceDisplay = document.getElementById("upgrade-gapple-chance-price-display");
const upgradeGappleChanceStatDisplay = document.getElementById("upgrade-gapple-chance-stat-display");
const upgradeGappleChanceLevelDisplay = document.getElementById("upgrade-gapple-chance-level-display");
// Dash
const upgradeDashPriceDisplay = document.getElementById("upgrade-dash-price-display");
const upgradeDashStatDisplay = document.getElementById("upgrade-dash-stat-display");
const upgradeDashLevelDisplay = document.getElementById("upgrade-dash-level-display");
// Bonus Gems
const upgradeBonusGemsPriceDisplay = document.getElementById("upgrade-bonus-gems-price-display");
const upgradeBonusGemsStatDisplay = document.getElementById("upgrade-bonus-gems-stat-display");
const upgradeBonusGemsLevelDisplay = document.getElementById("upgrade-bonus-gems-level-display");
// Multiply Gem
const upgradeMultiplyGemPriceDisplay = document.getElementById("upgrade-multiply-gem-price-display");
const upgradeMultiplyGemStatDisplay = document.getElementById("upgrade-multiply-gem-stat-display");
const upgradeMultiplyGemLevelDisplay = document.getElementById("upgrade-multiply-gem-level-display");

// Statistics Display
const shopGoldDisplay = document.getElementById("shop-gold-display");
const shopGemDisplay = document.getElementById("shop-gem-display");
const dayGoldDisplay = document.getElementById("day-gold-display");
const dayGemDisplay = document.getElementById("day-gem-display");
const earnedGoldDisplay = document.getElementById("earned-gold-display");
const earnedGemDisplay = document.getElementById("earned-gem-display");

// Main Sectors Display
const shopDisplay = document.getElementById("shop");
const dayDisplay = document.getElementById("day");
const snakeCanvasDisplay = document.getElementById("snake");

// Day Display
const dayDayDisplay = document.getElementById("day-day-display");
const shopDayDisplay = document.getElementById("shop-day-display");

// Side bar thingies
const rightSideContent = document.getElementsByClassName("right-side-content");

// Time Left
const timeLeftDisplay = document.getElementById("time-left-display");
let tick = 0;
let timeLeftSeconds = 0;

// Shop Related Variables
let currentShop = "Gold";
let upgradeCurrencyType;
let gemsUnlocked = false;
let specialsUnlocked = false;

// Shop Default Prices
let bonusGoldUpgradePrice = 12;
let multiplyGoldUpgradePrice = 18;
let timeLimitUpgradePrice = 8;
let bonusApplesUpgradePrice = 30;
let gappleChanceUpgradePrice = 25;
let dashUpgradePrice = 500;
let bonusGemsUpgradePrice = 12;
let multiplyGemUpgradePrice = 18;

let priceIncrease = 50;

// Apples
let nextAppleType;
let appleAmount = 0;
let appleDetected = false;
let applePositions = []

// Shop Upgrade Colors
const upgradeColors = [
    "#ffeb5c",
    "#ffd652",
    "#ffc247",
    "#ffad3d",
    "#ff9933",
    "#ff8529",
    "#ff701f",
    "#ff5c14",
    "#ff470a",
    "#ff3300"
];

const bonusGoldColorDisplay = document.getElementById("upgrade-bonus-gold-tile");
const multiplyGoldColorDisplay = document.getElementById("upgrade-multiply-gold-tile");
const timeLimitColorDisplay = document.getElementById("upgrade-time-limit-tile");
const bonusApplesColorDisplay = document.getElementById("upgrade-bonus-apples-tile");
const gappleChanceColorDisplay = document.getElementById("upgrade-gapple-chance-tile");
const dashColorDisplay = document.getElementById("upgrade-dash-tile");
const bonusGemsColorDisplay = document.getElementById("upgrade-bonus-gems-tile");
const multiplyGemColorDisplay = document.getElementById("upgrade-multiply-gem-tile");

const bonusGoldColor = upgradeColors[0];
const multiplyGoldColor = upgradeColors[0];
const timeLimitColor = upgradeColors[0];
const bonusApplesColor = upgradeColors[0];
const gappleChanceColor = upgradeColors[0];
const dashColor = upgradeColors[0];
const bonusGemsColor = upgradeColors[0];
const multiplyGemColor = upgradeColors[0];

// Currencies
let gold = 515;
let goldCompletitionMultiplier = 1;
let gem = 0;
let gemCompletitionMultiplier = 1;
let earnedGold = 0;
let earnedGem = 0;
let lostGold = 0;
let lostGem = 0;

// Upgrade Levels & Stats
let bonusGoldLevel = 0;
let multiplyGoldLevel = 0;
let timeLimitLevel = 0;
let bonusApplesLevel = 0;
let gappleChanceLevel = 0;
let dashLevel = 0;
let bonusGemsLevel = 0;
let multiplyGemLevel = 0;

let bonusGoldValue = 0;
let multiplyGoldValue = 1;
let timeLimitValue = 10;
let bonusApplesValue = 0;
let gappleChanceValue = 0;
let dashValue = "Locked";
let bonusGemsValue = 0;
let multiplyGemValue = 1;

// Snake Related Variables
let gameStarted = false;
const canvasWidth = 880;
const canvasHeight = 880;
const tileWidth = 80;
const tileHeight = 80;
const canvasGridSize = 11;
const snakeHeadSize = 80;

let xPos = canvasWidth / 2 - tileWidth / 2;
let yPos = canvasHeight / 2 - tileHeight / 2;

// Dashing
const defaultRightSideShopDisplay = document.getElementsByClassName("default-right-side");
const upgradeDashDetailsButtonDisplay = document.getElementById("upgrade-dash-details-button");
const upgradeDashDetailsDisplay = document.getElementById("upgrade-dash-details");
let temporaryXpos;
let temporaryYpos;
let dashed = false;
let dashDirection;

// Notifications
const notificationBackgroundDisplay = document.getElementById("notification-background");
const notificationContentDisplay = document.getElementsByClassName("notification-content");

// Others
let day = 1;
let scene = "shop";
let currentSide = "default";

// Music
const dayMusic = new Audio("Audio/day_music.mp3");
const shopMusic = new Audio("Audio/shop_music.mp3");
dayMusic.loop = true;
shopMusic.loop = true;
dayMusic.volume = 0.25;
shopMusic.volume = 0.25;
dayMusic.currentTime = 12.3;

//! Switching Shop Types

function nextShopMode() {
    const nextShopModeSound = new Audio("Audio/next_shop_mode.mp3");
    nextShopModeSound.volume = 0.5;
    nextShopModeSound.play();

    if (currentShop == "Gold") changeShopOther();
    else if (currentShop == "Other" && !gemsUnlocked && !specialsUnlocked) changeShopGold();
    else if (currentShop == "Other" && gemsUnlocked && !specialsUnlocked) changeShopGems();
    else if (currentShop == "Other" && specialsUnlocked) changeShopSpecial();
    else if (currentShop == "Special" && !gemsUnlocked) changeShopGold();
    else if (currentShop == "Special" && gemsUnlocked) changeShopGems();
    else if (currentShop == "Gems") changeShopGold();

    resetCurrentSide()
}

function previousShopMode() {
    const previousShopModeSound = new Audio("Audio/previous_shop_mode.mp3");
    previousShopModeSound.volume = 0.5;
    previousShopModeSound.play();

    if (currentShop == "Gold" && !gemsUnlocked && !specialsUnlocked) changeShopOther();
    else if (currentShop == "Gold" && !gemsUnlocked && specialsUnlocked) changeShopSpecial();
    else if (currentShop == "Gold" && gemsUnlocked) changeShopGems();
    else if (currentShop == "Other") changeShopGold();
    else if (currentShop == "Special") changeShopOther();
    else if (currentShop == "Gems" && !specialsUnlocked) changeShopOther();
    else if (currentShop == "Gems" && specialsUnlocked) changeShopSpecial();

    resetCurrentSide()
}



function changeShopGold() {
    currentShop = "Gold";
    goldShopIcon.style.display = "flex";
    otherShopIcon.style.display = "none";
    specialShopIcon.style.display = "none";
    gemShopIcon.style.display = "none";

    upgradeBonusGoldTile.style.display = "flex";
    upgradeMultiplyGoldTile.style.display = "flex";
    upgradeTimeLimitTile.style.display = "none";
    upgradeBonusApplesTile.style.display = "none";
    upgradeGappleChanceTile.style.display = "none";
    upgradeDashTile.style.display = "none";
    upgradeBonusGemsTile.style.display = "none";
    upgradeMultiplyGemTile.style.display = "none";

    console.log("Current shop type: " + currentShop);
}

function changeShopOther() {
    currentShop = "Other";
    goldShopIcon.style.display = "none";
    otherShopIcon.style.display = "flex";
    specialShopIcon.style.display = "none";
    gemShopIcon.style.display = "none";

    upgradeBonusGoldTile.style.display = "none";
    upgradeMultiplyGoldTile.style.display = "none";
    upgradeTimeLimitTile.style.display = "flex";
    upgradeBonusApplesTile.style.display = "flex";
    upgradeGappleChanceTile.style.display = "flex";
    upgradeDashTile.style.display = "none";
    upgradeBonusGemsTile.style.display = "none";
    upgradeMultiplyGemTile.style.display = "none";

    console.log("Current shop type: " + currentShop);
}

function changeShopSpecial() {
    currentShop = "Special";
    goldShopIcon.style.display = "none";
    otherShopIcon.style.display = "none";
    specialShopIcon.style.display = "flex";
    gemShopIcon.style.display = "none";

    upgradeBonusGoldTile.style.display = "none";
    upgradeMultiplyGoldTile.style.display = "none";
    upgradeTimeLimitTile.style.display = "none";
    upgradeBonusApplesTile.style.display = "none";
    upgradeGappleChanceTile.style.display = "none";
    upgradeDashTile.style.display = "flex";
    upgradeBonusGemsTile.style.display = "none";
    upgradeMultiplyGemTile.style.display = "none";

    console.log("Current shop type: " + currentShop);
}

function changeShopGems() {
    currentShop = "Gems";
    goldShopIcon.style.display = "none";
    otherShopIcon.style.display = "none";
    specialShopIcon.style.display = "none";
    gemShopIcon.style.display = "flex";

    upgradeBonusGoldTile.style.display = "none";
    upgradeMultiplyGoldTile.style.display = "none";
    upgradeTimeLimitTile.style.display = "none";
    upgradeBonusApplesTile.style.display = "none";
    upgradeGappleChanceTile.style.display = "none";
    upgradeDashTile.style.display = "none";
    upgradeBonusGemsTile.style.display = "flex";
    upgradeMultiplyGemTile.style.display = "flex";

    console.log("Current shop type: " + currentShop);
}

function resetCurrentSide() {
    currentSide = "default";
    upgradeDashDetailsButtonDisplay.textContent = "?";
    upgradeDashDetailsDisplay.style.display = "none";

    defaultRightSideShopDisplay[0].style.display = "flex";
}

//! Buying Stuff

function upgradeBonusGold() {
    if (gold >= bonusGoldUpgradePrice && bonusGoldLevel != 10) {
        gold -= bonusGoldUpgradePrice;
        bonusGoldLevel++;
        bonusGoldValue++;
        bonusGoldUpgradePrice += (bonusGoldUpgradePrice * priceIncrease) / 100;
        upgradeBonusGoldLevelDisplay.parentNode.parentNode.style.border = "4px solid " + upgradeColors[(bonusGoldLevel)];
        const upgradeSound = new Audio("Audio/upgrade.wav");
        upgradeSound.play();
    } else if (!(gold >= bonusGoldUpgradePrice) && bonusGoldLevel != 10) {
        upgradeCurrencyType = "gold";
        notEnoughCurrency();
    } else if (bonusGoldLevel == 10 && multiplyGoldLevel == 10 && goldCompletitionMultiplier == 1) {
        goldCompletitionMultiplier = 2;
        notification("Gold Upgrades Maxed!", "Gold gain has been doubled.");
    }
    updateDisplays();
}

function upgradeMultiplyGold() {
    if (gold >= multiplyGoldUpgradePrice && multiplyGoldLevel != 10) {
        gold -= multiplyGoldUpgradePrice;
        multiplyGoldLevel++;
        multiplyGoldValue += 0.1;
        multiplyGoldUpgradePrice += (multiplyGoldUpgradePrice * priceIncrease) / 100;
        upgradeMultiplyGoldLevelDisplay.parentNode.parentNode.style.border = "4px solid " + upgradeColors[(multiplyGoldLevel)];
        const upgradeSound = new Audio("Audio/upgrade.wav");
        upgradeSound.play();
    } else if (!(gold >= multiplyGoldUpgradePrice) && multiplyGoldLevel != 10) {
        upgradeCurrencyType = "gold";
        notEnoughCurrency();
    } else if (bonusGoldLevel == 10 && multiplyGoldLevel == 10 && goldCompletitionMultiplier == 1) {
        goldCompletitionMultiplier = 2;
        notification("Gold Upgrades Maxed!", "Gold gain has been doubled.");
    }
    updateDisplays();
}

function upgradeTimeLimit() {
    if (gold >= timeLimitUpgradePrice && timeLimitLevel != 10) {
        gold -= timeLimitUpgradePrice;
        timeLimitLevel++;
        timeLimitValue += 2;
        timeLimitUpgradePrice += (timeLimitUpgradePrice * priceIncrease) / 100;
        upgradeTimeLimitLevelDisplay.parentNode.parentNode.style.border = "4px solid " + upgradeColors[(timeLimitLevel)];
        const upgradeSound = new Audio("Audio/upgrade.wav");
        upgradeSound.play();
    } else if (!(gold >= timeLimitUpgradePrice) && timeLimitLevel != 10) {
        upgradeCurrencyType = "gold";
        notEnoughCurrency();
    }
    updateDisplays();
}

function upgradeBonusApples() {
    if (gold >= bonusApplesUpgradePrice && bonusApplesLevel != 10) {
        gold -= bonusApplesUpgradePrice;
        bonusApplesLevel++;
        bonusApplesValue++;
        bonusApplesUpgradePrice += (bonusApplesUpgradePrice * priceIncrease) / 100;
        upgradeBonusApplesLevelDisplay.parentNode.parentNode.style.border = "4px solid " + upgradeColors[(bonusApplesLevel)];
        const upgradeSound = new Audio("Audio/upgrade.wav");
        upgradeSound.play();
    } else if (!(gold >= bonusApplesUpgradePrice) && bonusApplesLevel != 10) {
        upgradeCurrencyType = "gold";
        notEnoughCurrency();
    }
    updateDisplays();
}

function upgradeGappleChance() {
    if (gold >= gappleChanceUpgradePrice && gappleChanceLevel != 10) {
        gold -= gappleChanceUpgradePrice;
        gappleChanceLevel++;
        gappleChanceValue++;
        gappleChanceUpgradePrice += (gappleChanceUpgradePrice * priceIncrease) / 100;
        upgradeGappleChanceLevelDisplay.parentNode.parentNode.style.border = "4px solid " + upgradeColors[(gappleChanceLevel)];
        const upgradeSound = new Audio("Audio/upgrade.wav");
        upgradeSound.play();
    } else if (!(gold >= gappleChanceUpgradePrice) && gappleChanceLevel != 10) {
        upgradeCurrencyType = "gold";
        notEnoughCurrency();
    }
    updateDisplays();
}

function upgradeDash() {
    if (gold >= dashUpgradePrice && dashLevel != 1) {
        gold -= dashUpgradePrice;
        dashLevel++;
        dashValue = "Unlocked";
        notification("Dashing Unlocked!", "Press 'Shift + Direction' During Gameplay.");
        upgradeDashLevelDisplay.parentNode.parentNode.style.border = "4px solid " + upgradeColors[9];
        const upgradeSound = new Audio("Audio/upgrade.wav");
        upgradeSound.play();
        document.getElementById("upgrade-dash-details-unlock-button").style.display = "none";
        resetCurrentSide();
    } else if (!(gold >= dashUpgradePrice) && dashLevel != 1) {
        upgradeCurrencyType = "gold";
        notEnoughCurrency();
    }
    updateDisplays();
}

function upgradeDashDetails() {
    if (currentSide != "dash") {
        currentSide = "dash";
        upgradeDashDetailsButtonDisplay.textContent = "X";
        upgradeDashDetailsDisplay.style.display = "flex";
        defaultRightSideShopDisplay[0].style.display = "none";
    } else if (currentSide == "dash") {
        resetCurrentSide();
    }
}

function upgradeBonusGems() {
    if (gem >= bonusGemsUpgradePrice && bonusGemsLevel != 10) {
        gem -= bonusGemsUpgradePrice;
        bonusGemsLevel++;
        bonusGemsValue++;
        bonusGemsUpgradePrice += (bonusGemsUpgradePrice * priceIncrease) / 100;
        upgradeBonusGemsLevelDisplay.parentNode.parentNode.style.border = "4px solid " + upgradeColors[(bonusGemsLevel)];
        const upgradeSound = new Audio("Audio/upgrade.wav");
        upgradeSound.play();
    } else if (!(gold >= bonusGemsUpgradePrice) && bonusGemsLevel != 10) {
        upgradeCurrencyType = "gem";
        notEnoughCurrency();
    } else if (bonusGemsLevel == 10 && multiplyGemLevel == 10 && gemCompletitionMultiplier == 1) {
        gemCompletitionMultiplier = 2;
        notification("Gem Upgrades Maxed!", "Gems gain has been doubled.");
    }
    updateDisplays();
}

function upgradeMultiplyGem() {
    if (gem >= multiplyGemUpgradePrice && multiplyGemLevel != 10) {
        gem -= multiplyGemUpgradePrice;
        multiplyGemLevel++;
        multiplyGemValue += 0.1;
        multiplyGemUpgradePrice += (multiplyGemUpgradePrice * priceIncrease) / 100;
        upgradeMultiplyGemLevelDisplay.parentNode.parentNode.style.border = "4px solid " + upgradeColors[(multiplyGemLevel)];
        const upgradeSound = new Audio("Audio/upgrade.wav");
        upgradeSound.play();
    } else if (!(gold >= multiplyGemUpgradePrice) && multiplyGemLevel != 10) {
        upgradeCurrencyType = "gem";
        notEnoughCurrency();
    } else if (bonusGemsLevel == 10 && multiplyGemLevel == 10 && gemCompletitionMultiplier == 1) {
        gemCompletitionMultiplier = 2;
        notification("Gem Upgrades Maxed!", "Gems gain has been doubled.");
    }
    updateDisplays();
}



function notEnoughCurrency() {
    console.log("You have no currency to purchase");

    if (upgradeCurrencyType == "gold") {
        shopGoldDisplay.style.animation = "none";
        shopGoldDisplay.offsetHeight;
        shopGoldDisplay.style.animation = "currency-blink-red 200ms";
        const notEnoughGoldSound = new Audio("Audio/not_enough_gold.mp3");
        notEnoughGoldSound.play();
    } else {
        shopGemDisplay.style.animation = "none";
        shopGemDisplay.offsetHeight;
        shopGemDisplay.style.animation = "currency-blink-red 200ms";
        const notEnoughGemSound = new Audio("Audio/not_enough_gem.mp3");
        notEnoughGemSound.play();
    }
}

//! Game

function roundNumbers(x, y) {
    xPos = Math.floor(x / snakeHeadSize) * snakeHeadSize;
    yPos = Math.floor(y / snakeHeadSize) * snakeHeadSize;
    return(xPos, yPos);
}

function setup() {
    createCanvas(880, 880, snake);
    colorMode(RGB, 255);
    background(40);
}

function draw() {
    // The Grid
    stroke(0);

    for (let i = 0; i < canvasGridSize + 1; i++) {
        strokeWeight(3);
        stroke(32);
        line(i * snakeHeadSize, 0, i * snakeHeadSize, canvasHeight);
        line(0, i * snakeHeadSize, canvasWidth, i * snakeHeadSize);
    }

    // The Player Head
    if (gameStarted) roundNumbers(canvasWidth / 2, canvasHeight / 2);
    strokeWeight(3);
    stroke(0, 72, 112);
    fill(0, 144, 224);
    square(xPos + snakeHeadSize / 10, yPos + snakeHeadSize / 10, snakeHeadSize * 0.8, snakeHeadSize / 8);

    // Draw apple if there's less than max apples
    if (appleAmount < bonusApplesValue + 1) {
        drawApple();
    }

    // Time Left
    if (dayDisplay.style.display == "flex") {
        tick++
        if (tick = 60) {
            tick = 0;
            timeLeftSeconds--;
            if (timeLeftSeconds / 60 < 9.5) {
                timeLeftDisplay.textContent = "00:0" + (timeLeftSeconds / 60).toFixed(0);
            } else {
                timeLeftDisplay.textContent = "00:" + (timeLeftSeconds / 60).toFixed(0);
            }
            if (timeLeftSeconds == 0) nextDay();
        }
    }
}

function drawApple() {
    nextAppleType = "normal";
    if (gappleChanceValue == 10) {
        nextAppleType = "golden";
    } else {
        if (gappleChanceValue > 0) {
            if (Math.random() < gappleChanceValue / 10) {
                nextAppleType = "golden";
            }
        }
    }

    appleX = (Math.round(Math.random() * (canvasGridSize - 1)) * snakeHeadSize);
    appleY = (Math.round(Math.random() * (canvasGridSize - 1)) * snakeHeadSize);

    while (appleX == xPos && appleY == yPos) return;

    if (appleAmount > 0) {
        for (let i = 0; i < appleAmount; i++) {
            while (appleX == applePositions[i][0] && appleY == applePositions[i][1]) return;
        }
    }

    applePositions.push([appleX, appleY, nextAppleType]);

    appleAmount++;

    strokeWeight(3)
    if (nextAppleType == "normal") {
        stroke(128, 0, 0);
        fill(255, 0, 0);
    } else if (nextAppleType == "golden") {
        stroke(128, 100, 15);
        fill(255, 200, 30);
    }
    square(appleX + snakeHeadSize / 10, appleY + snakeHeadSize / 10, snakeHeadSize * 0.8, snakeHeadSize / 8);
    console.log("Next apple position: " + appleX / snakeHeadSize + ", " + appleY / snakeHeadSize)
}

function notification(text, subtext) {
    notificationContentDisplay[0].textContent = text;
    notificationContentDisplay[1].textContent = subtext;

    notificationBackgroundDisplay.style.background = "#000000c0";
    notificationContentDisplay[0].style.opacity = "100%";
    notificationContentDisplay[1].style.opacity = "100%";

    setTimeout(() => {
        notificationBackgroundDisplay.style.background = "#00000000";
        notificationContentDisplay[0].style.opacity = "0%";
        notificationContentDisplay[1].style.opacity = "0%";
    }, 2000);
}

function checkForApple() {
    // Checking when player on apple
    for (let i = 0; i < appleAmount; i++) {
        if (applePositions[i][0] == xPos && applePositions[i][1] == yPos) {
            if (dashed == true) {
                dashed = false;
                if (dashDirection == "positive") {
                    temporaryXpos = 0;
                    temporaryYpos = 0;
                } else if (dashDirection == "negative") {
                    temporaryXpos = canvasWidth / snakeHeadSize;
                    temporaryYpos = canvasHeight / snakeHeadSize;
                }
            }
            // Change apple amount
            appleAmount--;

            // Different sound and gain
            if (applePositions[i][2] == "normal") {
                const eatAppleSound = new Audio("Audio/eat_apple.wav");
                eatAppleSound.play();
                // Gold
                gold += (bonusGoldValue + 1) * multiplyGoldValue * goldCompletitionMultiplier;
                earnedGold += (bonusGoldValue + 1) * multiplyGoldValue * goldCompletitionMultiplier;
            } else if (applePositions[i][2] == "golden") {
                const eatGappleSound = new Audio("Audio/eat_gapple.wav");
                eatGappleSound.play();
                // Gold
                gold += ((bonusGoldValue + 1) * multiplyGoldValue) * 2 * goldCompletitionMultiplier;
                earnedGold += ((bonusGoldValue + 1) * multiplyGoldValue) * 2 * goldCompletitionMultiplier;
                // Gems
                gem += (bonusGemsValue + 1) * multiplyGemValue * gemCompletitionMultiplier;
                earnedGem += (bonusGemsValue + 1) * multiplyGemValue * gemCompletitionMultiplier;
                if (!gemsUnlocked) {
                    gemsUnlocked = true;
                    notification("Gem Upgrades Unlocked!", "Access them in the shop.");
                }
            }

            square(applePositions[i][0], applePositions[i][1], snakeHeadSize);

            // Remove apple position from array
            applePositions.splice(i, 1);

            // Check if player unlocked specials
            if (gold >= 200 && !specialsUnlocked) {
                specialsUnlocked = true;
                notification("Special Upgrades Unlocked!", "Access them in the shop.");
            }

            // Animations
            dayGoldDisplay.style.animation = "none";
            dayGoldDisplay.offsetHeight;
            dayGoldDisplay.style.animation = "currency-blink-yellow 200ms";
            earnedGoldDisplay.style.animation = "none";
            earnedGoldDisplay.offsetHeight;
            earnedGoldDisplay.style.animation = "currency-blink-yellow 200ms";

            updateDisplays()
        }
    }
}

function keyPressed() {
    stroke(40);
    fill(40);
    square(xPos, yPos, snakeHeadSize);
    if (scene == "day") {
        if (dashValue == "Locked") {
            switch (key) {
                case "w":
                case "W":
                case "ArrowUp":
                    yPos -= snakeHeadSize;
                    break;
                case "a":
                case "A":
                case "ArrowLeft":
                    xPos -= snakeHeadSize;
                    break;
                case "s":
                case "S":
                case "ArrowDown":
                    yPos += snakeHeadSize;
                    break;
                case "d":
                case "D":
                case "ArrowRight":
                    xPos += snakeHeadSize;
                    break;
            }
        } else if (dashValue == "Unlocked") {
            temporaryXpos = ((canvasWidth - xPos - snakeHeadSize) / snakeHeadSize);
            temporaryYpos = ((canvasWidth - yPos - snakeHeadSize) / snakeHeadSize);
            dashed = true;
            switch (key) {
                case "w":
                case "ArrowUp":
                    yPos -= snakeHeadSize;
                    break;
                case "a":
                case "ArrowLeft":
                    xPos -= snakeHeadSize;
                    break;
                case "s":
                case "ArrowDown":
                    yPos += snakeHeadSize;
                    break;
                case "d":
                case "ArrowRight":
                    xPos += snakeHeadSize;
                    break;
                
                case "W":
                    dashDirection = "negative";
                    for (let i = 0; i < Math.abs(temporaryYpos - canvasHeight / snakeHeadSize) - 1; i++) {
                        yPos -= snakeHeadSize;
                        checkForApple();
                    }
                    break;
                case "A":
                    dashDirection = "negative";
                    for (let i = 0; i < Math.abs(temporaryXpos - canvasWidth / snakeHeadSize) - 1; i++) {
                        xPos -= snakeHeadSize;
                        checkForApple();
                    }
                    break;
                case "S":
                    dashDirection = "positive";
                    for (let i = 0; i < temporaryYpos; i++) {
                        yPos += snakeHeadSize;
                        checkForApple();
                    }
                    break;
                case "D":
                    dashDirection = "positive";
                    for (let i = 0; i < temporaryXpos; i++) {
                        xPos += snakeHeadSize;
                        checkForApple();
                    }
                    break;
            }
            dashed = false;
        }
        console.log("Current Position:", xPos, yPos, "(", xPos / snakeHeadSize, yPos / snakeHeadSize, ")");
    
        if (xPos >= canvasWidth) {
            xPos -= snakeHeadSize;
            direction = "d";
            hitSide(direction);
        }
    
        if (yPos >= canvasHeight) {
            yPos -= snakeHeadSize;
            direction = "s";
            hitSide(direction);
        }
    
        if (xPos < 0) {
            xPos += snakeHeadSize;
            direction = "a";
            hitSide(direction);
        }
    
        if (yPos < 0) {
            yPos += snakeHeadSize;
            direction = "w";
            hitSide(direction);
        }
    
        checkForApple();
    } else if (scene == "shop") {
        switch (key) {
            case "a":
            case "A":
            case "ArrowLeft":
                previousShopMode();
                break;
            case "d":
            case "D":
            case "ArrowRight":
                nextShopMode();
                break;
        }
    }
}

function hitSide(direction) {
    // Animation
    snakeCanvasDisplay.style.animation = "none";
    snakeCanvasDisplay.offsetHeight;
    snakeCanvasDisplay.style.animation = "miku-miku-beam-" + direction + " 100ms";

    dayGoldDisplay.style.animation = "none";
    dayGoldDisplay.offsetHeight;
    dayGoldDisplay.style.animation = "currency-blink-red 200ms";

    console.log("you got miku miku beamed on '" + direction + "' side");

    // Sound effects
    const mikuMikuBeamSound = new Audio("Audio/miku_miku_beam.wav");
    mikuMikuBeamSound.play();

    // Decreasing gold
    gold -= 0.5 * day;
    earnedGold -= 0.5 * day;
    if (gold < 0) {
        lostGold = gold;
        gold = 0;
        earnedGold += 0.5 * day;
        earnedGold -= (lostGold + 0.5 * day);
    }

    // Decreasing gems
    if (gemsUnlocked) {
        gem -= 0.25 * day;
        earnedGem -= 0.25 * day;
        if (gem < 0) {
            lostGem = gem;
            gem = 0;
            earnedGem += 0.25 * day;
            earnedGem -= (lostGem + 0.25 * day);
        }
    }

    updateDisplays();
}

//! Switching Scenes

function beginDay() {
    // Reset apple positions and time, player position and clear the canvas
    applePositions = [];
    appleAmount = 0;
    timeLeftSeconds = timeLimitValue * 60;

    xPos = canvasWidth / 2 - tileWidth / 2;
    yPos = canvasHeight / 2 - tileHeight / 2;

    fill(40);
    square(0, 0, 880);

    // Change the scene
    scene = "day";
    shopDisplay.style.display = "none";
    dayDisplay.style.display = "flex";

    // Sound effects
    const beginDaySound = new Audio("Audio/begin_day.ogg");
    beginDaySound.play();

    // Music
    shopMusic.pause();
    dayMusic.currentTime = 12.3;
    dayMusic.play();

    updateDisplays();
}

function nextDay() {
    // Change the scene
    scene = "shop";
    shopDisplay.style.display = "flex";
    dayDisplay.style.display = "none";

    // Sound effects
    const nextDaySound = new Audio("Audio/next_day.ogg");
    nextDaySound.play();

    // Music
    dayMusic.pause();
    shopMusic.currentTime = 10.7;
    shopMusic.play();

    // Reset temporary currencies and increase the day
    earnedGold = 0;
    earnedGem = 0;
    day++

    updateDisplays();
}