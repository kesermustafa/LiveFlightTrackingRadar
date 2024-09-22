import moment from "moment/moment";
import 'moment/locale/tr'

const formatDate = (unix_time) => {

    const formated = new Date(unix_time * 1000);
    return moment(formated).calendar()
}

export default formatDate;