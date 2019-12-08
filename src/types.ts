export enum SyntaxKind {

}

export class PrimitiveDataType {

}

export class NumericType extends PrimitiveDataType {
    value: number
}

export class IntegerType extends NumericType {

}

export class ByteType extends IntegerType {

}

export class ShortType extends IntegerType {

}

export class IntType extends IntegerType {

}

export class LongType extends NumericType {

}

export class CharType extends NumericType {

}

export class FloatingPointType extends NumericType {

}

export class FloatType extends FloatingPointType {

}

export class DoubleType extends FloatingPointType {

}

export class BooleanType extends PrimitiveDataType {
    value: boolean
}

export class ReturnAddressType extends PrimitiveDataType {

}

export class ReferenceType {
    static Null: ReferenceType = new ReferenceType()
}

export class ClassType extends ReferenceType {

}

export class ArrayType extends ReferenceType {

}

export class InterfaceType extends ReferenceType {

}

