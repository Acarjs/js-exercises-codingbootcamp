import { DailyForecast } from "../DailyForecast/DailyForecast";
import { forecast } from "../../forecast"

export const WeeklyForecast = () => {

    // console.log(forecast);

    return (
        <div class="week-forecast">
            <DailyForecast dayData={forecast[0]}/>
            <DailyForecast dayData={forecast[1]}/>
            <DailyForecast dayData={forecast[2]}/>
            <DailyForecast dayData={forecast[3]}/>
            <DailyForecast dayData={forecast[4]}/>
            <DailyForecast dayData={forecast[5]}/>
            <DailyForecast dayData={forecast[6]}/>
        </div>
    )
}