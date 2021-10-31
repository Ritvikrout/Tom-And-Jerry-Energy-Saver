class Appliance {
    constructor (x, y, width, height) {
      this.sprite = createSprite(x, y, width, height);
      this.sprite.addImage("applianceImage", applianceImg);
      this.sprite.scale = 0.2;
      appliancesGroup.add(this.sprite);
    }


}