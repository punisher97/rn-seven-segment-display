import React from "react";
import { View } from "react-native";
import HSegment from "./HSegment";
import VSegment from "./VSegment";
/**
  * References: http://www.uize.com/examples/seven-segment-display.html
 * Example: 0 = 0x3f
 *  G	F	E	D	C	B	A
    0	1	1	1	1	1	1
 */
export var segmentMap = {
    "0": 0x3f,
    "1": 0x30,
    "2": 0x5b,
    "3": 0x4f,
    "4": 0x66,
    "5": 0x6d,
    "6": 0x7d,
    "7": 0x07,
    "8": 0x7f,
    "9": 0x6f,
    A: 0x77,
    //B : , // not support
    C: 0x39,
    // D : , //not support
    E: 0x79,
    F: 0x71,
    G: 0x3d,
    H: 0x76,
    //I: ,//not support
    J: 0x1e,
    //K: , // not support
    L: 0x0e,
    //M: , // not support
    N: 0x37,
    // O: , //not support
    P: 0x73,
    //Q: , //not support
    //R: ,//not support
    // S: ,//not support
    //T: ,//not support
    U: 0x3e,
    Y: 0x6e,
    a: 0x5f,
    b: 0x7c,
    c: 0x58,
    d: 0x5e,
    e: 0x7b,
    h: 0x74,
    i: 0x10,
    j: 0x0e,
    l: 0x06,
    n: 0x15,
    o: 0x5c,
    q: 0x67,
    r: 0x50,
    t: 0x78,
    u: 0x1c,
    dash: 0x40,
    underscore: 0x08,
    equal: 0x48
};
export var bitReadAll = function (value) {
    return [6, 5, 4, 3, 2, 1, 0].map(function (bit) { return Boolean((value >> bit) & 0x01); });
};
var defaultProps = {
    width: 40,
    height: 5,
    value: "dash",
    onColor: "rgba(255,0,0,1)",
    offColor: "rgba(127,127,127,0.15)"
};
export default function SevenSegmentDisplay(_a) {
    var _b = _a === void 0 ? defaultProps : _a, _c = _b.width, width = _c === void 0 ? defaultProps.width : _c, _d = _b.height, height = _d === void 0 ? defaultProps.height : _d, _e = _b.onColor, onColor = _e === void 0 ? defaultProps.onColor : _e, _f = _b.offColor, offColor = _f === void 0 ? defaultProps.offColor : _f, value = _b.value, style = _b.style;
    width = +width;
    height = +height;
    var _g = bitReadAll(value in segmentMap ? segmentMap[value] : Number(value)), g = _g[0], f = _g[1], e = _g[2], d = _g[3], c = _g[4], b = _g[5], a = _g[6];
    return (<View style={[{ width: width + height * 2 }, style]}>
      <HSegment width={width} height={height} color={a ? onColor : offColor}/>
      <View style={{ position: "relative", width: "100%", height: width }}>
        <VSegment width={height} height={width} color={f ? onColor : offColor} align="left"/>
        <VSegment width={height} height={width} color={b ? onColor : offColor} align="right"/>
      </View>
      <HSegment width={width} height={height} color={g ? onColor : offColor}/>
      <View style={{ position: "relative", width: "100%", height: width }}>
        <VSegment width={height} height={width} color={e ? onColor : offColor} align="left"/>
        <VSegment width={height} height={width} color={c ? onColor : offColor} align="right"/>
      </View>
      <HSegment width={width} height={height} color={d ? onColor : offColor}/>
    </View>);
}
SevenSegmentDisplay.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFhLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLFFBQVEsTUFBTSxZQUFZLENBQUM7QUFFbEM7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQThCO0lBQ25ELEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsQ0FBQyxFQUFFLElBQUk7SUFDUCxzQkFBc0I7SUFDdEIsQ0FBQyxFQUFFLElBQUk7SUFDUCxzQkFBc0I7SUFDdEIsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxtQkFBbUI7SUFDbkIsQ0FBQyxFQUFFLElBQUk7SUFDUCxxQkFBcUI7SUFDckIsQ0FBQyxFQUFFLElBQUk7SUFDUCxxQkFBcUI7SUFDckIsQ0FBQyxFQUFFLElBQUk7SUFDUCxxQkFBcUI7SUFDckIsQ0FBQyxFQUFFLElBQUk7SUFDUCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLElBQUksRUFBRSxJQUFJO0lBQ1YsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQU0sVUFBVSxHQUFHLFVBQUMsS0FBYTtJQUN0QyxPQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUE5QixDQUE4QixDQUFDO0FBQWhFLENBQWdFLENBQUM7QUFXbkUsSUFBTSxZQUFZLEdBQUc7SUFDbkIsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxNQUFNO0lBQ2IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsd0JBQXdCO0NBQ25DLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxVQUFVLG1CQUFtQixDQUFDLEVBT1Q7UUFQUyxzQ0FPVCxFQU5qQyxhQUEwQixFQUExQiwrQ0FBMEIsRUFDMUIsY0FBNEIsRUFBNUIsaURBQTRCLEVBQzVCLGVBQThCLEVBQTlCLG1EQUE4QixFQUM5QixnQkFBZ0MsRUFBaEMscURBQWdDLEVBQ2hDLGdCQUFLLEVBQ0wsZ0JBQUs7SUFFTCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDZixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFWCxJQUFBLHdFQUVMLEVBRk0sU0FBQyxFQUFFLFNBQUMsRUFBRSxTQUFDLEVBQUUsU0FBQyxFQUFFLFNBQUMsRUFBRSxTQUFDLEVBQUUsU0FFeEIsQ0FBQztJQUVGLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDbEQ7TUFBQSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQ3RFO01BQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQ2xFO1FBQUEsQ0FBQyxRQUFRLENBQ1AsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQ2QsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUM5QixLQUFLLENBQUMsTUFBTSxFQUVkO1FBQUEsQ0FBQyxRQUFRLENBQ1AsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQ2QsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUM5QixLQUFLLENBQUMsT0FBTyxFQUVqQjtNQUFBLEVBQUUsSUFBSSxDQUNOO01BQUEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUN0RTtNQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUNsRTtRQUFBLENBQUMsUUFBUSxDQUNQLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUNkLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUNkLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FDOUIsS0FBSyxDQUFDLE1BQU0sRUFFZDtRQUFBLENBQUMsUUFBUSxDQUNQLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUNkLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUNkLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FDOUIsS0FBSyxDQUFDLE9BQU8sRUFFakI7TUFBQSxFQUFFLElBQUksQ0FDTjtNQUFBLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFDeEU7SUFBQSxFQUFFLElBQUksQ0FBQyxDQUNSLENBQUM7QUFDSixDQUFDO0FBRUQsbUJBQW1CLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVmlldywgVmlld1N0eWxlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZVwiO1xyXG5pbXBvcnQgSFNlZ21lbnQgZnJvbSBcIi4vSFNlZ21lbnRcIjtcclxuaW1wb3J0IFZTZWdtZW50IGZyb20gXCIuL1ZTZWdtZW50XCI7XHJcblxyXG4vKipcclxuICAqIFJlZmVyZW5jZXM6IGh0dHA6Ly93d3cudWl6ZS5jb20vZXhhbXBsZXMvc2V2ZW4tc2VnbWVudC1kaXNwbGF5Lmh0bWxcclxuICogRXhhbXBsZTogMCA9IDB4M2ZcclxuICogIEdcdEZcdEVcdERcdENcdEJcdEFcclxuICAgIDBcdDFcdDFcdDFcdDFcdDFcdDFcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZWdtZW50TWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gIFwiMFwiOiAweDNmLCAvLyAwXHJcbiAgXCIxXCI6IDB4MzAsIC8vIDFcclxuICBcIjJcIjogMHg1YiwgLy8gMlxyXG4gIFwiM1wiOiAweDRmLCAvLyAzXHJcbiAgXCI0XCI6IDB4NjYsIC8vIDRcclxuICBcIjVcIjogMHg2ZCwgLy8gNVxyXG4gIFwiNlwiOiAweDdkLCAvLyA2XHJcbiAgXCI3XCI6IDB4MDcsIC8vIDdcclxuICBcIjhcIjogMHg3ZiwgLy8gOFxyXG4gIFwiOVwiOiAweDZmLCAvLyA5XHJcbiAgQTogMHg3NyxcclxuICAvL0IgOiAsIC8vIG5vdCBzdXBwb3J0XHJcbiAgQzogMHgzOSxcclxuICAvLyBEIDogLCAvL25vdCBzdXBwb3J0XHJcbiAgRTogMHg3OSxcclxuICBGOiAweDcxLFxyXG4gIEc6IDB4M2QsXHJcbiAgSDogMHg3NixcclxuICAvL0k6ICwvL25vdCBzdXBwb3J0XHJcbiAgSjogMHgxZSxcclxuICAvL0s6ICwgLy8gbm90IHN1cHBvcnRcclxuICBMOiAweDBlLFxyXG4gIC8vTTogLCAvLyBub3Qgc3VwcG9ydFxyXG4gIE46IDB4MzcsXHJcbiAgLy8gTzogLCAvL25vdCBzdXBwb3J0XHJcbiAgUDogMHg3MyxcclxuICAvL1E6ICwgLy9ub3Qgc3VwcG9ydFxyXG4gIC8vUjogLC8vbm90IHN1cHBvcnRcclxuICAvLyBTOiAsLy9ub3Qgc3VwcG9ydFxyXG4gIC8vVDogLC8vbm90IHN1cHBvcnRcclxuICBVOiAweDNlLFxyXG4gIFk6IDB4NmUsXHJcbiAgYTogMHg1ZixcclxuICBiOiAweDdjLFxyXG4gIGM6IDB4NTgsXHJcbiAgZDogMHg1ZSxcclxuICBlOiAweDdiLFxyXG4gIGg6IDB4NzQsXHJcbiAgaTogMHgxMCxcclxuICBqOiAweDBlLFxyXG4gIGw6IDB4MDYsXHJcbiAgbjogMHgxNSxcclxuICBvOiAweDVjLFxyXG4gIHE6IDB4NjcsXHJcbiAgcjogMHg1MCxcclxuICB0OiAweDc4LFxyXG4gIHU6IDB4MWMsXHJcbiAgZGFzaDogMHg0MCxcclxuICB1bmRlcnNjb3JlOiAweDA4LFxyXG4gIGVxdWFsOiAweDQ4XHJcbn07XHJcbmV4cG9ydCBjb25zdCBiaXRSZWFkQWxsID0gKHZhbHVlOiBudW1iZXIpID0+XHJcbiAgWzYsIDUsIDQsIDMsIDIsIDEsIDBdLm1hcChiaXQgPT4gQm9vbGVhbigodmFsdWUgPj4gYml0KSAmIDB4MDEpKTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTZXZlblNlZ21lbnRQcm9wcyB7XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gIG9uQ29sb3I/OiBzdHJpbmc7XHJcbiAgb2ZmQ29sb3I/OiBzdHJpbmc7XHJcbiAgc3R5bGU/OiBWaWV3U3R5bGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiA0MCxcclxuICBoZWlnaHQ6IDUsXHJcbiAgdmFsdWU6IFwiZGFzaFwiLFxyXG4gIG9uQ29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCIsXHJcbiAgb2ZmQ29sb3I6IFwicmdiYSgxMjcsMTI3LDEyNywwLjE1KVwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXZlblNlZ21lbnREaXNwbGF5KHtcclxuICB3aWR0aCA9IGRlZmF1bHRQcm9wcy53aWR0aCxcclxuICBoZWlnaHQgPSBkZWZhdWx0UHJvcHMuaGVpZ2h0LFxyXG4gIG9uQ29sb3IgPSBkZWZhdWx0UHJvcHMub25Db2xvcixcclxuICBvZmZDb2xvciA9IGRlZmF1bHRQcm9wcy5vZmZDb2xvcixcclxuICB2YWx1ZSxcclxuICBzdHlsZVxyXG59OiBTZXZlblNlZ21lbnRQcm9wcyA9IGRlZmF1bHRQcm9wcykge1xyXG4gIHdpZHRoID0gK3dpZHRoO1xyXG4gIGhlaWdodCA9ICtoZWlnaHQ7XHJcblxyXG4gIGNvbnN0IFtnLCBmLCBlLCBkLCBjLCBiLCBhXSA9IGJpdFJlYWRBbGwoXHJcbiAgICB2YWx1ZSBpbiBzZWdtZW50TWFwID8gc2VnbWVudE1hcFt2YWx1ZV0gOiBOdW1iZXIodmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxWaWV3IHN0eWxlPXtbeyB3aWR0aDogd2lkdGggKyBoZWlnaHQgKiAyIH0sIHN0eWxlXX0+XHJcbiAgICAgIDxIU2VnbWVudCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBjb2xvcj17YSA/IG9uQ29sb3IgOiBvZmZDb2xvcn0gLz5cclxuICAgICAgPFZpZXcgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IHdpZHRoIH19PlxyXG4gICAgICAgIDxWU2VnbWVudFxyXG4gICAgICAgICAgd2lkdGg9e2hlaWdodH1cclxuICAgICAgICAgIGhlaWdodD17d2lkdGh9XHJcbiAgICAgICAgICBjb2xvcj17ZiA/IG9uQ29sb3IgOiBvZmZDb2xvcn1cclxuICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VlNlZ21lbnRcclxuICAgICAgICAgIHdpZHRoPXtoZWlnaHR9XHJcbiAgICAgICAgICBoZWlnaHQ9e3dpZHRofVxyXG4gICAgICAgICAgY29sb3I9e2IgPyBvbkNvbG9yIDogb2ZmQ29sb3J9XHJcbiAgICAgICAgICBhbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L1ZpZXc+XHJcbiAgICAgIDxIU2VnbWVudCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBjb2xvcj17ZyA/IG9uQ29sb3IgOiBvZmZDb2xvcn0gLz5cclxuICAgICAgPFZpZXcgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IHdpZHRoIH19PlxyXG4gICAgICAgIDxWU2VnbWVudFxyXG4gICAgICAgICAgd2lkdGg9e2hlaWdodH1cclxuICAgICAgICAgIGhlaWdodD17d2lkdGh9XHJcbiAgICAgICAgICBjb2xvcj17ZSA/IG9uQ29sb3IgOiBvZmZDb2xvcn1cclxuICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VlNlZ21lbnRcclxuICAgICAgICAgIHdpZHRoPXtoZWlnaHR9XHJcbiAgICAgICAgICBoZWlnaHQ9e3dpZHRofVxyXG4gICAgICAgICAgY29sb3I9e2MgPyBvbkNvbG9yIDogb2ZmQ29sb3J9XHJcbiAgICAgICAgICBhbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L1ZpZXc+XHJcbiAgICAgIDxIU2VnbWVudCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBjb2xvcj17ZCA/IG9uQ29sb3IgOiBvZmZDb2xvcn0gLz5cclxuICAgIDwvVmlldz5cclxuICApO1xyXG59XHJcblxyXG5TZXZlblNlZ21lbnREaXNwbGF5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuIl19