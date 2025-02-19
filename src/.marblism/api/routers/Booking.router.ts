/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        create: procedure.input($Schema.BookingInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).booking.create(input as any))),

        delete: procedure.input($Schema.BookingInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).booking.delete(input as any))),

        findFirst: procedure.input($Schema.BookingInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).booking.findFirst(input as any))),

        findMany: procedure.input($Schema.BookingInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).booking.findMany(input as any))),

        findUnique: procedure.input($Schema.BookingInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).booking.findUnique(input as any))),

        update: procedure.input($Schema.BookingInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).booking.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.BookingCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingGetPayload<T>, Context>) => Promise<Prisma.BookingGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BookingDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingGetPayload<T>, Context>) => Promise<Prisma.BookingGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BookingFindFirstArgs, TData = Prisma.BookingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BookingFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BookingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BookingFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BookingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BookingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BookingFindManyArgs, TData = Array<Prisma.BookingGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.BookingFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BookingGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BookingFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BookingGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BookingGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BookingFindUniqueArgs, TData = Prisma.BookingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BookingFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BookingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BookingFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BookingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BookingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.BookingUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingGetPayload<T>, Context>) => Promise<Prisma.BookingGetPayload<T>>
            };

    };
}
