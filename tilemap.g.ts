// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level2":return tiles.createTilemap(hex`05001000080606060c090606060b070606060c070606060a070606060b090606060a070606060c070606060a080606060a090606060b080606060a070606060b070606060c090606060c070606060c0105030402`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Left corner":
            case "tile1":return tile1;
            case "Right corner":
            case "tile2":return tile2;
            case "Middle V1":
            case "tile3":return tile3;
            case "Middle V2":
            case "tile4":return tile4;
            case "Middle V3":
            case "tile5":return tile5;
            case "sky":
            case "tile6":return tile6;
            case "Left V1":
            case "tile7":return tile7;
            case "Left V2":
            case "tile8":return tile8;
            case "Left V3":
            case "tile9":return tile9;
            case "Right V1":
            case "tile10":return tile10;
            case "Right V2":
            case "tile11":return tile11;
            case "Right V3":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
