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

        create: procedure.input($Schema.ReviewInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).review.create(input as any))),

        delete: procedure.input($Schema.ReviewInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).review.delete(input as any))),

        findFirst: procedure.input($Schema.ReviewInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).review.findFirst(input as any))),

        findMany: procedure.input($Schema.ReviewInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).review.findMany(input as any))),

        findUnique: procedure.input($Schema.ReviewInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).review.findUnique(input as any))),

        update: procedure.input($Schema.ReviewInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).review.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.ReviewCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReviewCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReviewGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReviewGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReviewCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReviewCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReviewGetPayload<T>, Context>) => Promise<Prisma.ReviewGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ReviewDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReviewDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReviewGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReviewGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReviewDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReviewDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReviewGetPayload<T>, Context>) => Promise<Prisma.ReviewGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ReviewFindFirstArgs, TData = Prisma.ReviewGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReviewFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReviewGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReviewFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReviewFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReviewGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReviewGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ReviewFindManyArgs, TData = Array<Prisma.ReviewGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ReviewFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ReviewGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReviewFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReviewFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ReviewGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ReviewGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ReviewFindUniqueArgs, TData = Prisma.ReviewGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReviewFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReviewGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReviewFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReviewFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReviewGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReviewGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.ReviewUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReviewUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReviewGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReviewGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReviewUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReviewUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReviewGetPayload<T>, Context>) => Promise<Prisma.ReviewGetPayload<T>>
            };

    };
}
