export const DailyForecast = (props) => {
    console.log(props.dayData)
    const dayInfo = props.dayData
    return (
        <div class="day-forecast">
          <div class="day-forecast__header">{dayInfo.weekday}</div>
          <div class="day-forecast__body">
            <div class={`day-forecast__image weather-${dayInfo.weather}`}></div>
            <div class="day-forecast__temps">
              <span class="temp-day">{dayInfo.tempDay}°</span>
              <span class="temp-night">{dayInfo.tempNight}°</span>
            </div>
          </div>
        </div>
    )
}