import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
} from '@chakra-ui/react'
import { useField } from 'formik';
import { forwardRef, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export const InputField = forwardRef((props, ref) => {
    const { type, name, label } = props;
    const isPassword = type === 'password'

    const [field, meta] = useField(props);
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: !isPassword })
    const inputRef = useRef(null)

    const mergeRef = useMergeRefs(inputRef, ref)
    const onClickReveal = () => {
        onToggle()
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true })
        }
    }
    return (
        <FormControl isInvalid={meta.error}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <InputGroup>
                {isPassword && <InputRightElement>
                    <IconButton
                        variant="text"
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        icon={isOpen ? <HiEyeOff /> : <HiEye />}
                        onClick={onClickReveal}
                    />
                </InputRightElement>}

                <Input
                    ref={mergeRef}
                    {...field}
                    {...props}
                    type={isOpen ? 'text' : 'password'}
                />
            </InputGroup>

            {meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
        </FormControl>
    )
})

InputField.displayName = 'InputField'