# TypeScript Union and Intersection Types

TypeScript is a statically typed language that helps improve the quality of our code. Two important features of TypeScript are **Union Types** and **Intersection Types**. In this document, we will discuss their significance and usage.

## Table of Contents

- [Union Types](#union-types)
- [Intersection Types](#intersection-types)
- [Union and Intersection Types - Differences](#union-and-intersection-types-differences)

## Union Types

Union types allow a variable to hold values of multiple possible types. It enables you to specify a type that can be one of several types.

### Example:

```typescript
type StringOrNumber = string | number;
```

In this case, the `StringOrNumber` type can be either `string` or `number`. When you use it, TypeScript will ensure that you only assign a `string` or `number` value to this variable.

## Advantages of Union Types:

- **Flexible Type Handling**:  
  Union types offer enhanced flexibility in your code by allowing a single variable to accept multiple types, making it adaptable to different data scenarios.

- **Type Safety**:  
  TypeScript ensures that only valid types are used with union types, which helps avoid potential runtime errors and ensures that the code remains error-free at compile time.

## Documentation

[Union Types Resources ](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

## Intersection Types

Intersection types combine two or more types into a single type. It is used when an object needs to have multiple types of properties from different type definitions.

```typescript
type Person = { name: string };
type Address = { city: string };
type PersonWithAddress = Person & Address;
```

In this example, the `PersonWithAddress` type will include both `name` and `city` properties.

## Advantages of Intersection Types:

- **Combining Properties**:
  Intersection types allow you to combine properties from multiple types, making it easier to define complex objects.

- **Strict Typing**:
  Intersection types provide more precise and consistent code by enforcing stricter type requirements.

## Union and Intersection Types - Differences

- **Union Types**:
  Allow a value to be one of multiple possible types.

- **Intersection Types** :
  Combine all properties from multiple types into a single type.

## Documentation

[Intersection Types Resources ](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

## Conclusion

By using Union and Intersection Types, you can write more `flexible`, `type-safety`, and consistent code in `TypeScript`. These features help maintain type safety in large applications and improve the overall quality of your code.
