#

:point_right: [Youtube playlist](https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&ab_channel=Codevolution)

# 1 Basic Props Types

- Use the `type` keyword to define a type. The `type` must be written with a capital first letter

- `Basic types`
  > type GreetProps = {
  > name: string;
  > messageCount: number;
  > isLogged: boolean;
  > };

> const Greet = ({ name, messageCount, isLogged }: GreetProps) => { ... }

`OR`

> const Greet = (props: GreetProps) => { ... }

- `Object`

  > type PersonProps = {
  > name: {
  > first: string;
  > last: string;
  > };
  > };

- `Array`
  > type PersonListProps = {
  > names: {
  > first: string;
  > last: string;
  > }[];
  > };

# 2 Advanced Props Types

- `union type` of string literals
- Add special type to an element of the `Status.tsx` component
- The if-else statement has three branches
- if we accept any string as prop, we should not notice the problem
- instead, we add special values as types

> type StatusProps = {
> status: "loading" | "success" | "error";
> };

- Add `children props`
- Add a react component as a children to another react component -> React Types Package
- `Oscar.tsx` and `Heading.tsx`

  > children: React.ReactNode;

- `Optional type` -> use ? /question mark/

# 3 Event Props

# 4 Style Props

# 5 UseState Hook

# 6 UseState Future Value

# 7 UseState Type Assertion

# 8 UseReducer Hook

# 9 UseReducer Strict Action Types

# 10 UseContext Hook

# 11 UseContext Future Value

# 12 UseRef Hook

# 13 Class Component

# 14 Component Prop

# 15 Generic Props

# 16 Restricting Props

# 17 Template Literals and Exclude

# 18 Wrapping HTML Elements

# 19 Extracting a Components Props Types

# 20 Polymorphic Components
