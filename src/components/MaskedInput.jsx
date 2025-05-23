"use client";

import { useEffect, useRef } from "react";
import IMask from "imask";
import { Form } from "react-bootstrap";

const MaskedInput = ({ mask, onChange, value, ...props }) => {
    const inputRef = useRef(null);
    const maskRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            maskRef.current = IMask(inputRef.current, { mask });

            maskRef.current.on("accept", () => {
                const maskedValue = maskRef.current.value;
                const unmaskedValue = maskRef.current.unmaskedValue;

                onChange &&
                    onChange({
                        target: {
                            value: maskedValue,
                            unmaskedValue: unmaskedValue,
                        },
                    });
            });

            return () => {
                maskRef.current.destroy();
            };
        }
    }, [mask, onChange]);

    useEffect(() => {
        if (maskRef.current && maskRef.current.value !== value) {
            maskRef.current.value = value || "";
        }
    }, [value]);

    return <Form.Control ref={inputRef} {...props} />;
};

export default MaskedInput;
