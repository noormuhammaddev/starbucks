import * as JOI from "joi";
import moment from "moment";

const ValidationSchema = JOI.object({
    title: JOI.string()
        .min(4)
        .max(100)
        .required(),
    content: JOI.string()
        .required(),
    author: JOI.string()
        .min(2)
        .max(25)
        .required(),
    createdAt: JOI.string()
        .custom((value, helpers) => {
            const format = "DD MMM YYYY, h:mm a";
            if (!moment(value, format, true).isValid()) {
                return helpers.error('any.invalid');
            }
            return value;
        }, 'Custom Date Format Validation')
        .required()
});

export default ValidationSchema;
